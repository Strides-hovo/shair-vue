<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;


class LanguageFactory extends Factory
{

    public function definition()
    {
        return [
            'name' => $this->faker->country(),
            'code' => $this->faker->languageCode() ,
            'dir' => $this->faker->randomElement(['ltr', 'rtl']),
            'status' => true,
        ];
    }
}
