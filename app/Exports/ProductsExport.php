<?php

namespace App\Exports;


use App\Models\Product;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;


class ProductsExport  implements FromCollection , WithHeadings, WithTitle, ShouldAutoSize, WithColumnFormatting, WithMapping{

    public array|Collection $rows;

    const FIELDS = [
        'id','category_id','status','Instruction_file','rent',
        'sale','guarantee','dimension','flag','meta_keywords'
    ];

    public function __construct()
    {

        $this->rows = Product::all();

    }
    public function collection()
    {
        return $this->rows;
    }

    public function map($row): array
    {
        return [
            $row['id'],
            $row['category_id'],
            $row['status'],
            $row['Instruction_file'],
            $row['rent'],
            $row['sale'],
            $row['guarantee'],
            $row['dimension'],
            $row['flag'],
            $row['meta_keywords'],
        ];
    }

    public function headings(): array
    {
        return self::FIELDS;
    }

    public function array(): array
    {
        return $this->rows;
    }

    public function title(): string
    {
        return 'products';
    }

    public function columnFormats(): array
    {
        return [
            'B' => '#,##0',
            'C' => '#,##0',
            'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }


}
