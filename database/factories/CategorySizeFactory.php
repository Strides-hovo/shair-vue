<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;


class CategorySizeFactory extends Factory
{

    private static int $i = 0;
    public function definition()
    {
        self::$i++;
        return [
            'width' => self::$i ,
            'height' => $this->faker->randomElement(['2.1','2.3']),
            'category_id' => self::$i ,
            'status' => true,
            'by_default' => true,
            'sorting' => $this->faker->numberBetween(1,5)
            ];
    }
}
