<?php

namespace Database\Factories;

use App\Models\Page;
use App\Models\PageTranslate;
use Illuminate\Database\Eloquent\Factories\Factory;


class PageFactory extends Factory
{


    public function definition()
    {
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
        foreach ($dates as $date){
            Page::create($date);
        }


        $translates = [
            [
                'page_id' => 1,
                'title' => $this->faker->title,
                'slug' => $this->faker->slug,
                'meta_title' => $this->faker->name,
                'language_id' => 1,
            ],
            [
                'page_id' => 2,
                'title' => $this->faker->title,
                'slug' => $this->faker->slug,
                'meta_title' => $this->faker->name,
                'language_id' => 1,
            ],
        ];

        foreach ($translates as $date){
            PageTranslate::create($date);
        }

    }
}
