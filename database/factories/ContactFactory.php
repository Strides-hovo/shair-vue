<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class ContactFactory extends Factory
{

    public function definition()
    {
        return [
            'youtube' => $this->faker->url,
            'whatsapp' => $this->faker->url,
            'instagram' => $this->faker->url,
            'twitter' => $this->faker->url,
            'facebook' => $this->faker->url
        ];

    }
}
