<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductPhoto;
use App\Models\ProductPhotoTranslate;
use App\Models\ProductPrice;

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
        Product::factory(2)->create();
        ProductTranslate::factory(4)->create();


        ProductPhoto::factory(2)->create();
        ProductPhotoTranslate::factory(4)->create();

        ProductPrice::factory(4)->create();
    }
}
