<?php

namespace Database\Factories;


use App\Models\Language;
use Illuminate\Database\Eloquent\Factories\Factory;


class CategoryFactory extends Factory
{

    public function definition()
    {
        return [
            'name' => $this->faker->title,
            'language_id' => Language::all()->random()->id,
        ];
    }
}
