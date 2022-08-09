<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;


class ProductPriceFactory extends Factory
{
     
    public function definition()
    {
        return [
            'product_id' => Product::all()->random()->id,
            'width' => $this->faker->randomFloat(2,1,5),
            'height' => $this->faker->randomElement([2.1, 2.3]),
            
            'sku' => $this->faker->randomNumber(),
            'price' => $this->faker->randomFloat(2,1,100),
            'invoice_code' => $this->faker->randomNumber(),
            'delivery_sale' => $this->faker->randomFloat(2,1,100),
            'delivery_rent' => $this->faker->randomFloat(2,1,100),
        ];

    
    }
}
