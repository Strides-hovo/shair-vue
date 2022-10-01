<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


class BranchFactory extends Factory
{

    public function definition()
    {
        return [
            'sorting' => 1,
            'status' => true
        ];
    }
}
