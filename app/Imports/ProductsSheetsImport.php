<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ProductsSheetsImport implements WithMultipleSheets, SkipsUnknownSheets
{
    use WithConditionalSheets;

    public function sheets(): array
    {
        return [
            'products' => new ProductsImport,
            'sizes' => new ProductsSizesImport,
            'translate' => new ProductsTranslateImport,
        ];
    }

    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }

    public function conditionalSheets(): array
    {
        return [
            'products' => new ProductsImport,
            'sizes' => new ProductsSizesImport,
            'translate' => new ProductsTranslateImport,
        ];
    }
}
