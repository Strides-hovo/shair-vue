<?php

namespace App\Imports;

use App\Models\CategorySize;
use App\Models\Product;
use App\Models\ProductSize;
use App\Models\ProductTranslate;
use App\Traits\CustomValidate;
use ErrorException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpserts;

class ProductImport implements ToCollection, WithHeadingRow, SkipsEmptyRows , WithUpserts
{


    use CustomValidate;

    public Product $product;


    /**
     * @param Collection $rows
     */
    public function collection(Collection $rows)
    {
        $product_id = $rows[0]['product_id'] ?? $rows[0]['id'];

        if ($rows[0]->has('id') && !$rows[0]->has('product_id')) {
            $this->product($rows[0]);
        }

        if ($rows[0]->has('width')) {
            foreach ($rows as $row) {
                $category_size = $this->category_size($row['width'], $row['height'], $row['product_id']);
                $this->product_size($row, $category_size->id);
            }
        }
        if ($rows[0]->has('language_id')) {
            $this->translations($rows);
        }

        $this->product = Product::find($product_id)->loads();

    }


    public function category_size(string $width, string $height, int $product_id)
    {
        $category_id = Product::find($product_id)->category_id;

        $data = self::ValidDates(
            ['width' => $width, 'height' => $height],
            ['width' => 'required|integer', 'height' => 'string|in:2.1,2.3']
        );

        return CategorySize::firstOrCreate(
            ['width' => $data['width'], 'height' => $data['height']],
            ['width' => $data['width'], 'height' => $data['height'], 'category_id' => $category_id]
        );
    }

    public function product_size($row, int $category_size_id)
    {
        ProductSize::updateOrCreate(
            ['product_id' => $row['product_id'], 'category_size_id' => $category_size_id],
            [
                'product_id' => $row['product_id'],
                'category_size_id' => $category_size_id,
                'status' => $row['status'],
                'sku' => $row['sku'],
                'price' => $row['price'],
                'invoice_code' => $row['invoice_code'],
                'delivery_sale' => $row['delivery_sale'],
                'delivery_rent' => $row['delivery_rent'],
            ]
        );
    }


    public function translations($rows)
    {
        $data = self::ValidDates($rows->toArray(),
            ['*.product_id' => 'required|exists:products,id',
             '*.language_id' => 'required|exists:languages,id'
            ]
        );
        ProductTranslate::upsert($rows->toArray(), ['product_id', 'language_id']);
    }


    public function product($row)
    {

        Product::upsert(
            [
                'id' => $row['id'],
                'category_id' => $row['category_id'],
                'status' => $row['status'],
                'Instruction_file' => isset($row['Instruction_file']) ? $this->upload($row['Instruction_file']) : null,
                'rent' => $row['rent'],
                'sale' => $row['sale'],
                'guarantee' => $row['guarantee'],
                'dimension' => $row['dimension'],
                'flag' => $row['flag']
            ],
            ['id'],
        );

        $this->product = Product::find($row['id'])->loads();

    }
    /**
     * @throws ValidationException
     */
    private function upload(string $pdfPath): ?string
    {
        try {
            $path = storage_path('app/public/product/');
            $name = File::name($pdfPath) . '.' . File::extension($pdfPath);
            if ($name) {
                copy($pdfPath, $path . $name);
                return "/storage/product/$name";
            }
        } catch (ErrorException $e) {
            throw new ErrorException($e->getMessage());
            //$this->customValidate([], [], ['instruction_file', $e->getMessage()]);
        }
        return null;
    }

    public function uniqueBy()
    {
        return ['product_id', 'language_id'];
    }
}
