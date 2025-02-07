<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;


class ArticleTranslateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return meta_seeder([
            'article_id' => Article::all()->unique()->random()->id,
            'author' => $this->faker->firstName,
            'name' => $this->faker->titleFemale,
            'short_description' => $this->faker->realText(50),
            'description' => $this->faker->realText(100),
            'image_alt' => $this->faker->title,
            'image_title' => $this->faker->title,
            'footer_text' => $this->faker->realText(100),


        ], $this->faker);


    }
}
