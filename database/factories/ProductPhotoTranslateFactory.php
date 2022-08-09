<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\ProductPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductPhotoTranslate>
 */
class ProductPhotoTranslateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'language_id' => Language::all()->random()->id,
            'product_photo_id' => ProductPhoto::all()->random()->id,
            'alt' => $this->faker->title,
            'title' => $this->faker->title,
            
        ];



    }
}
