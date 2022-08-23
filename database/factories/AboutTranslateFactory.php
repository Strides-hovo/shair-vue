<?php

namespace Database\Factories;

use App\Models\About;

use Illuminate\Database\Eloquent\Factories\Factory;



class AboutTranslateFactory extends Factory
{

    public function definition()
    {
        return neta_seeder([
            'about_id' => About::all()->random()->id,
            'title' => $this->faker->title,
            'content' => $this->faker->realText,
            'btn_price_list' => $this->faker->name,
            'btn_products' => $this->faker->name,
        ], $this->faker);
    }







}
