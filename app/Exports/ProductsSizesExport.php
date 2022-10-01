<?php


namespace App\Exports;

use App\Models\Product;
use App\Models\ProductSize;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class ProductsSizesExport implements FromArray, WithHeadings, WithTitle, ShouldAutoSize, WithColumnFormatting, WithMapping, SkipsEmptyRows
{
    public array|Collection $rows;

    const FIELDS = [
        'product_id', 'width', 'height','status', 'sku', 'price',
        'invoice_code', 'delivery_sale', 'delivery_rent'
    ];

    public function __construct()
    {
        $result = [];
        Product::all()->map(function($pr) use (&$result) {
           return array_map(function ($size) use (&$result) {
               $result[] = $size->toArray();
            },$pr->sizes);
        });
        $this->rows = $result;
        //unset($result);
        //dd($this->rows);
    }


    public function map($row): array
    {
        return [
            $row['product_id'],
            $row['width'],
            $row['height'],
            $row['status'],
            $row['sku'],
            $row['price'],
            $row['invoice_code'],
            $row['delivery_sale'],
            $row['delivery_rent'],
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

    public function collection(): Collection
    {
        return $this->rows;
    }

    public function title(): string
    {
        return 'sizes';
    }

    public function columnFormats(): array
    {
        return [
            'B' => '#,##0',
            'C' => '#,##0',
            'D' => "#,##0"
        ];
    }
}