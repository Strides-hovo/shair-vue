<?php

namespace Database\Factories;

use App\Models\PhotoPage;
use Illuminate\Database\Eloquent\Factories\Factory;


class PhotoPageTranslateFactory extends Factory
{


    public function definition()
    {
        return meta_seeder([
            'photo_page_id' => PhotoPage::all()->unique()->random()->id,
            'name' => $this->faker->name,
            'description' => $this->faker->text,
        ], $this->faker);
    }


}
