<?php

namespace App\Imports;

use App\Models\ProductTranslate;
use App\Traits\CustomValidate;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsTranslateImport implements ToCollection, WithHeadingRow, SkipsEmptyRows
{

    use CustomValidate;

    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        $dates = $collection
            ->map(fn($row) => $this->product_fields($row->toArray()))
            ->filter(fn($row) => $row);
        ProductTranslate::upsert($dates->toArray(), ['product_id', 'language_id']);
    }


    /**
     * @throws ValidationException
     */
    public function product_fields($row): array
    {
        if (empty($row['product_id'])) {
            return [];
        }

        return $this->ValidDates($row, [
            'short_description' => 'required|string',
            'description' => 'required|string',
            'name' => 'required|string',
            'advantage' => 'nullable|string',
            'flag_text' => 'nullable|string',
            'language_id' => 'required|exists:languages,id',
            'product_id' => 'required|exists:products,id',
            'slug' => 'required|string',
        ]);
    }

}
