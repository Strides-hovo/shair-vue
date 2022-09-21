<?php

namespace App\Exports;

use App\Models\ProductTranslate;
use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ProductTranslateExport implements ShouldAutoSize, FromCollection, WithHeadings, WithMapping
{

    use Exportable;
    public $translations;

    const TRANSLATE_FIELDS = [
        "product_id","language_id" ,
        "name","short_description" ,"description" ,
        "advantage","flag_text","slug" ,
        "meta_title","meta_description","meta_keywords" ,
    ];


    public function __construct(int|string $product_id,)
    {
        $this->translations = ProductTranslate::where('product_id',$product_id)->get();
    }


    public function collection(): Collection
    {
        return $this->translations;
    }


    public function headings(): array
    {
        return self::TRANSLATE_FIELDS;
    }

    public function map($row): array
    {
        return [
            $row["product_id"],
            $row["language_id"] ,
            $row["name"],
            $row["short_description"],
            $row["description"] ,
            $row["advantage"],
            $row["flag_text"],
            $row["slug"],
            $row["meta_title"],
            $row["meta_description"],
            $row["meta_keywords"] ,
        ];
    }
}
