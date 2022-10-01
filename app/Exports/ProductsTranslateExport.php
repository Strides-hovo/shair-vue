<?php

namespace App\Exports;

use App\Models\ProductTranslate;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class ProductsTranslateExport implements FromCollection, WithHeadings, WithTitle, ShouldAutoSize, WithMapping
{
    public array|Collection $rows;

    const FIELDS = [
        'language_id','name','short_description','description','advantage',
        'flag_text','slug','meta_title','meta_description','meta_keywords'
    ];

    public function __construct()
    {
        $this->rows = ProductTranslate::all();
    }


    public function map($row): array
    {
        return [
            $row['language_id'],
            $row['name'],
            $row['short_description'],
            $row['description'],
            $row['advantage'],
            $row['flag_text'],
            $row['slug'],
            $row['meta_title'],
            $row['meta_description'],
            $row['meta_keywords'],
        ];
    }

    public function headings(): array
    {
        return self::FIELDS;
    }

    public function collection(): Collection
    {
        return $this->rows;
    }

    public function title(): string
    {
        return 'translate';
    }

    /*public function columnFormats(): array
    {
        return [
            'B' => '#,##0',
            'C' => '#,##0',
            'D' => NumberFormat::FORMAT_PERCENTAGE_00
        ];
    }*/
}