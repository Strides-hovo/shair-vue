<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Language;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    public function run()
    {

        $this->call([
            Language::factory(2)->create(),
            Category::factory(5)->create(),
            Product::factory(30)->create()
        ]);

    }
}
