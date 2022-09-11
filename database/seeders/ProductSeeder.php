<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductSize;
use App\Models\CategorySize;
use App\Models\ProductPhoto;
use App\Models\ProductVideo;
use Illuminate\Database\Seeder;
use App\Models\ProductTranslate;
use App\Models\ProductPhotoTranslate;

class ProductSeeder extends Seeder
{

    const urls = [
        'V_Nr31Lv6H8',
        '8jqN_OFzIEw',
        'XkcUwlGz4ss',
        'Eu6BiVjfSE0',
        'cRLVgFNTnIg',
        'aL6FfmHWo4I',
        'x4gLSRwmtyQ',
        '298CKSKrmS0',
        '42Gfy89k0Xw',
        'fVgnceUzE08',

        '7CboLyKlWRk',
        'fATegRW2EE4',
        'D5dTHggg_Co',
        'jSoG216dTnY',
        'aL6FfmHWo4I',
        'dYP7Jbf_buw',
        'rAnt-ch5qDk',
        'KGoH7SyOWsY',
        'XwaH-qT4Rm0',
        'HQnjypbh4Yg',


    ];

    public function run()
    {
        Product::factory(10)->create();
        ProductTranslate::factory(20)->create();

        ProductPhoto::factory(40)->create();
        ProductPhotoTranslate::factory(80)->create();

        //ProductSize::factory(20)->create();
        $test = $this->sizes();

        $this->videos();
    }


    private function videos()
    {
        $dates = [];
        foreach (self::urls as $k => $url){
            $dates[$k]['product_id'] = Product::all()->random()->id;
            $dates[$k]['url'] = $url;
        }
        ProductVideo::insert($dates);
    }


    public function sizes()
    {
        $products = Product::all();
        $cat_sizes = CategorySize::all();
        $dates = [];
        $products->each(function($product) use($cat_sizes, &$dates) {
            $cats = $cat_sizes->splice(0,2)->each(function($size) use($product, &$dates){
                $dates[] = $this->sizes_data($product->id, $size->id);
            });
        });
        
        ProductSize::insert($dates);
        unset($dates);
    }


    public function sizes_data($product_id, $category_size_id)
    {
        $faker = \Faker\Factory::create('ru_RU');
        return [
            'product_id' => $product_id,
            'category_size_id' => $category_size_id,
            'sku' => $faker->randomNumber(),
            'price' => $faker->randomFloat(2,1,100),
            'invoice_code' => $faker->randomNumber(),
            'delivery_sale' => $faker->randomFloat(2,1,100),
            'delivery_rent' => $faker->randomFloat(2,1,100),
        ];
    }
}
