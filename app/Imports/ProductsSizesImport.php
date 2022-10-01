<?php

namespace App\Imports;

use App\Models\CategorySize;
use App\Models\Product;
use App\Models\ProductSize;
use App\Traits\CustomValidate;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsSizesImport implements ToCollection, SkipsEmptyRows, WithHeadingRow
{
    use CustomValidate;

    private \Illuminate\Database\Eloquent\Collection $products;

    public function __construct()
    {
        $this->products = Product::all();
    }

    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        $dates = $collection->map(fn($row) => $this->size_fields($row->toArray()))
            ->filter(fn($row) => $row)
        ;

        ProductSize::upsert($dates->toArray(), ['product_id', 'category_size_id']);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    private function size_fields(array $row): array
    {
        if (empty($row['product_id'])) {
            return [];
        }

        $product = $this->products->find($row['product_id']);
        $cat_size = CategorySize::firstOrCreate(
            ['width' => $row['width'], 'height' => $row['height'], 'category_id' => $product->category_id]
        );

        return array_merge_recursive($this->ValidDates($row, [
            'product_id' => 'required|exists:products,id',
            'status' => 'nullable|boolean',
            'sku' => 'required|alpha_num',
            'price' => 'required|numeric',
            'invoice_code' => 'required|integer',
            'delivery_sale' => 'required|integer',
            'delivery_rent' => 'required|integer',
//            'width' => 'required|integer',
//            'height' => 'required|numeric|in:2.1,2.3',
        ]), ['category_size_id' => $cat_size->id]);
    }


}
