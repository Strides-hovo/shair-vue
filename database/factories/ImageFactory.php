<?php

namespace Database\Factories;

use App\Models\Language;
use Illuminate\Database\Eloquent\Factories\Factory;


class ImageFactory extends Factory
{

    public function definition()
    {
        return [
            'src' => $this->faker->imageUrl,
            'name' => $this->faker->name,
            'language_id' => Language::all()->random()->id,
        ];
    }
}
