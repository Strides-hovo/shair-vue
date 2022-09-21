<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;


class ProductFactory extends Factory
{
    public static $i = 0;

    public function definition()
    {
        self::$i++;
        return [
            'category_id' => self::$i
        ];
    }


}
