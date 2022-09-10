<?php

namespace App\Exports;

use App\Models\Product;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;


class ProductExport implements  FromView, WithMultipleSheets
{

    public Product $product;
    use Exportable;
    
    const PRODUCT_FIELDS = [
        'id', 'category_id', 'status', 'Instruction_file', 'rent', 'sale', 'guarantee', 'dimension', 'flag', 'translations',
    ];

    const TRANSLATE_FIELDS = [
        'language_id', 'name', 'short_description', 'description', 'advantage', 'flag_text', 'slug', 'meta_title', 'meta_description', 'meta_keywords',
    ];

    public function __construct(int | string $id = null)
    {
        $this->product = Product::find($id)->load('translations');
    }

    public function view(): View
    {
        $product = $this->product;

        $translate = array_merge(...array_fill(0, count($product->translations), self::TRANSLATE_FIELDS));

        $headers = self::PRODUCT_FIELDS;
        $trs = self::TRANSLATE_FIELDS;
        //dd( $headers );
        return view('export.product', compact('product', 'headers','trs'));
    }

}
