<?php

namespace Database\Factories;

use App\Models\CategorySize;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;


class ProductSizeFactory extends Factory
{
     
    public function definition()
    {
        return [
            'product_id' => Product::all()->random()->id,
            'sku' => $this->faker->randomNumber(),
            'price' => $this->faker->randomFloat(2,1,100),
            'invoice_code' => $this->faker->randomNumber(),
            'delivery_sale' => $this->faker->randomFloat(2,1,100),
            'delivery_rent' => $this->faker->randomFloat(2,1,100),
            'category_size_id' => CategorySize::all()->unique('id')->random()->id
        ];

    
    }
}
