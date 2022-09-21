<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ProductExport implements ShouldAutoSize, FromQuery, WithHeadings
{


    private int|string $id;
    use Exportable;

    const PRODUCT_FIELDS = [
         'id','category_id', 'status', 'Instruction_file', 'rent', 'sale', 'guarantee', 'dimension', 'flag'
    ];


    public function __construct(int|string $id)
    {
        $this->id = $id;
    }


    public function query()
    {
        return Product::query()->where('id', $this->id)->select(self::PRODUCT_FIELDS);
    }

    public function headings(): array
    {
        return self::PRODUCT_FIELDS;
    }

    public function map($row): array
    {
        return [
            $row->category->translate->name,
            $row->status,
            $row->Instruction_file,
            $row->rent,
            $row->sale,
            $row->guarantee,
            $row->dimension,
            $row->flag
        ];
    }
}
