<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PageTranslate;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('ru_RU');
        $dates = [
            [
                'name' => 'product',
                'sub_menu' => false,
            ],
            [
                'name' => 'article',
                'sub_menu' => true,
            ],
        ];
        
            Page::insert($dates);
        


        $translates = [
            [
                'page_id' => 1,
                'title' => $faker->title,
                'slug' => $faker->slug,
                'meta_title' => $faker->name,
                'language_id' => 1,
            ],
            [
                'page_id' => 2,
                'title' => $faker->title,
                'slug' => $faker->slug,
                'meta_title' => $faker->name,
                'language_id' => 1,
            ],
        ];
        
        PageTranslate::insert($translates);
    }
}
