<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CategorySize;
use App\Models\CategoryTranslate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{

    public function run()
    {
        Category::factory(10)->create();
        CategoryTranslate::factory(20)->create();
        CategorySize::factory(10)->create();
    }
}
