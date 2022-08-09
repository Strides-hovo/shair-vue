<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CategoryTranslate>
 */
class CategoryTranslateFactory extends Factory
{
    
    
    public function definition()
    {
        return [
            'language_id' => Language::all()->random()->id,
            'category_id' => Category::all()->random()->id,
            'name' => $this->faker->name,
            'description' => $this->faker->text,
        ];
    }
}
