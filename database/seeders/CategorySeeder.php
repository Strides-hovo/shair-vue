<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CategoryTranslate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{

    public function run()
    {
        Category::factory(3)->create();
        CategoryTranslate::factory(3)->create();
    }
}
