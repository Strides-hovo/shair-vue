<?php

namespace App\Exports;

use App\Models\Category;
use App\Models\Language;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CategoryExport implements  FromQuery, WithHeadings
{



    public function headings(): array
    {
        $columns = array_keys(Category::first()->toArray());
        $categories = Category::all()->toArray();
        $languages = Language::all();

        return array_merge([$columns],$categories);
    }


    public function query()
    {
        return Category::all();
    }
}
