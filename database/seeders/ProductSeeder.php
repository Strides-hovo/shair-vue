<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductPhoto;
use App\Models\ProductPhotoTranslate;
use App\Models\ProductSize;
use App\Models\ProductTranslate;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(10)->create();
        ProductTranslate::factory(20)->create();

        ProductPhoto::factory(40)->create();
        ProductPhotoTranslate::factory(80)->create();

        ProductSize::factory(20)->create();
    }
}
