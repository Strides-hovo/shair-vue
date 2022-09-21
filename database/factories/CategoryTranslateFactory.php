<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;


class CategoryTranslateFactory extends Factory
{
    
    
    public function definition()
    {
        return [
            'language_id' => Language::all()->unique()->random()->id,
            'category_id' => Category::all()->unique()->random()->id,
            'name' => $this->faker->name,
            'meta_title' => $this->faker->title,
            'meta_description' => $this->faker->text,
            'footer_text' => $this->faker->text,
        ];
    }
}
