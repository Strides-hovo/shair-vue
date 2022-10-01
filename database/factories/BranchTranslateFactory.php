<?php

namespace Database\Factories;

use App\Models\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;
use function Symfony\Component\Translation\t;


class BranchTranslateFactory extends Factory
{


    public function definition()
    {
        return [
            'name_title' => $this->faker->title,
            'name' => $this->faker->title,
            'address_title' => $this->faker->title,
            'address' => $this->faker->title,
            'tel' => $this->faker->phoneNumber,
            'tel_title' => $this->faker->title,
            'email' => $this->faker->email,
            'email_title' => $this->faker->title,
            'time_title' => $this->faker->title,
            'time' => $this->faker->sentences(3, true),
            'whats_title' => $this->faker->title,
            'whats_text' => $this->faker->title,
            'language_id' => $this->faker->randomElement([1,2]),
            'branch_id' => Branch::all()->unique()->random()->id
        ];

    }
}
