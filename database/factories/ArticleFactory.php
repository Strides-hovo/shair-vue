<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;


class ArticleFactory extends Factory
{


    public function definition()
    {
        return [
            'product_id' => Product::all()->random()->id,
            'published_at' => $this->faker->date('Y-m-d'),
            'image' => $this->faker->imageUrl,
            'image_name' => $this->faker->name,
            'page_name' => 'article',
        ];

    }
}
