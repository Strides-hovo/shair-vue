<?php

namespace App\Imports;

use App\Models\Product;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductImport implements ToCollection, WithHeadingRow, SkipsEmptyRows
{


    const PRODUCT_FIELDS = [
        'id','category_id','status','Instruction_file','rent','sale','guarantee','dimension','flag','translations'
    ];

    const TRANSLATE_FIELDS = [
        'language_id','name','short_description','description','advantage','flag_text','slug','meta_title','meta_description','meta_keywords'
    ];

    public function model(array $row)
    {
        dd($row);
        return new Product([]);
    }

    public function collection(Collection $rows)
    {

dd($rows);
        $rows->filter(function ($row) {
            $this->product($row->all());

            $row['product_id'] = self::$product_id;
            $cols = $this->translation_fields($row->all());
            ProductTranslate::create($cols);
        });

        
        foreach ($rows as $row) {
            $product = Product::create([
                'category_id' => $row['category_id'],
                'status'=> $row['status'],
                'Instruction_file'=> $row['Instruction_file'],
                'rent'=> $row['rent'],
                'sale'=> $row['sale'],
                'guarantee'=> $row['guarantee'],
                'dimension'=> $row['dimension'],
                'flag'=> $row['flag'],
            ]);

        }
    }


   

}
