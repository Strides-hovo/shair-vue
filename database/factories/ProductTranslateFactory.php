<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;



class ProductTranslateFactory extends Factory
{


    public function definition()
    {
        return [
            'product_id' => Product::all()->unique()->random()->id,
            'language_id' => Language::all()->unique()->random()->id,
            'name' => $this->faker->name,
            'short_description' => $this->faker->text,
            'description' => $this->faker->realText,
            'slug' => $this->faker->slug
        ];


    }
}
