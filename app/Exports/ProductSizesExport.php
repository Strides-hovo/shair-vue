<?php

namespace App\Exports;

use App\Models\Product;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ProductSizesExport implements ShouldAutoSize,FromCollection, WithHeadings, WithMapping
{


    use Exportable;
    public Collection|array $sizes;


    const SIZE_FIELDS = [
            "width","height",

        "status","product_id","sku",
			"price","invoice_code","delivery_sale","delivery_rent",
    ];


    public function __construct(int|string $product_id, string $size)
    {
        $this->sizes = Product::find($product_id)->sizes;
    }

    public function collection(): Collection
    {

        return collect($this->sizes);
    }



    public function headings(): array
    {
        return self::SIZE_FIELDS;
    }

    public function map($row): array
    {
       return [
           $row['width'], $row['height'],$row['status'],$row['product_id'],$row['sku'],
           $row['price'], $row['invoice_code'],	$row['delivery_sale'],	$row['delivery_rent'],
       ];
    }
}
