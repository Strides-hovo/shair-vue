<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;


class CategorySizeFactory extends Factory
{

    public function definition()
    {

        return [
            'width' => $this->faker->randomFloat('.',1,15),
            'height' => $this->faker->randomElement(['2.1','2.3']),
            'category_id' => Category::all()->unique('id')->random()->id ,
            'status' => true,
            'by_default' => true,
            'sorting' => $this->faker->numberBetween(1,5)
            ];
    }
}
