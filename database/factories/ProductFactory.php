<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Image;
use App\Models\Language;
use Illuminate\Database\Eloquent\Factories\Factory;


class ProductFactory extends Factory
{

    public function definition()
    {
        return [
            'name' => $this->faker->title,
            'price' => $this->faker->numberBetween(20,500),
            'category_id' => Category::all()->random()->id,
            'image_id' => Factory::factoryForModel(Image::class),
            'language_id' => Language::all()->random()->id,
            'reserves' => $this->faker->numberBetween(10,50),
            'description' => $this->faker->realText,
            'short_description' => $this->faker->text
        ];
    }
}

