<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ProductsSheetsExport implements FromArray, WithMultipleSheets
{

    protected array $sheets;

    public function __construct()
    {
        $this->sheets = ['products'];
    }

    public function array(): array
    {
        return $this->sheets;
    }



    public function sheets(): array
    {
        $sheets = [
            new ProductsExport,
            new ProductsSizesExport,
            new ProductsTranslateExport
        ];

        return $sheets;
    }



}
