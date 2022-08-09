<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductPhoto>
 */
class ProductPhotoFactory extends Factory
{



    public function definition()
    {
        return [
            'product_id' => Product::all()->random()->id,
            'image' => $this->faker->imageUrl,
            'sorting' => 1,
            'name' => $this->faker->name
        ];


    }
}
