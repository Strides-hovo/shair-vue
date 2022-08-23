<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;


class LanguageFactory extends Factory
{

    public function definition()
    {
        return [
            'name' => $this->faker->country(),
            'code' => $this->faker->randomElement(['ru', 'en']),
            'dir' => $this->faker->randomElement(['ltr', 'rtl']),
            'status' => true,
        ];
    }
}
