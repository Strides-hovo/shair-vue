<?php

namespace Database\Factories;
use App\Models\PhotoPage;
use App\Models\Language;

use Illuminate\Database\Eloquent\Factories\Factory;


class PhotoPageTranslateFactory extends Factory
{


    public function definition()
    {
        return [
          'slug' => $this->faker->slug,
          'language_id' => Language::all()->unique()->random()->id,
          'photo_page_id' => PhotoPage::all()->unique()->random()->id,
          'name' => $this->faker->name,
          'description' => $this->faker->text,
          'meta_title' => $this->faker->name,
          'meta_description' => $this->faker->name,
          'meta_keywords' => $this->faker->name,
        ];
    }



}
