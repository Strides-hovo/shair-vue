<?php
/** @noinspection PhpUndefinedMethodInspection */

/** @noinspection PhpArrayShapeAttributeCanBeAddedInspection */

namespace App\Imports;

use App\Models\Product;
use App\Traits\CustomValidate;
use ErrorException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsImport implements ToCollection, WithHeadingRow, SkipsEmptyRows
{


    use CustomValidate;

    /**
     * @param Collection $rows
     * @return void
     */
    public function collection(Collection $rows): void
    {
        $dates = $rows->map(fn($row) => $this->product_fields($row->toArray()));
        Product::upsert($dates->toArray(), ['id']);
    }


    /**
     * @throws ValidationException
     * @throws ErrorException
     */
    public function product(array $row)
    {
        $product_data = $this->product_fields($row);
        if (!empty($product_data)) {
            if (!empty($row['instruction_file'])) {
                $product_data['instruction_file'] = $this->upload($row['instruction_file']);
            }
            $product = Product::create($product_data);
            //self::$product_id = $product->id;
        }
    }


    /**
     * @throws ValidationException
     */
    public function product_fields($row): array
    {
        if (empty($row['category_id'])) {
            return [];
        }

        return $this->ValidDates($row, [
            'id' => 'required|exists:products,id',
            'category_id' => 'required|exists:categories,id',
            'Instruction_file' => 'nullable|string',
            'status' => 'required|boolean',
            'flag' => 'required|string|in:noting,stock,sale,new',
            'rent' => 'required|boolean',
            'sale' => 'required|boolean',
            'guarantee' => 'required|boolean',
            'dimension' => 'required|boolean',
        ]);
    }


    /**



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
            $this->ValidDates([], [], ['instruction_file', $e->getMessage()]);
        }
        return null;
    }


}
