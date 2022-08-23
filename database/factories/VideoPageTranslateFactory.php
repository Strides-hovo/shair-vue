<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\VideoPage;
use Illuminate\Database\Eloquent\Factories\Factory;



class VideoPageTranslateFactory extends Factory
{


    public function definition()
    {

        return [
            'language_id' => Language::all()->random()->id,
            'video_page_id' => VideoPage::all()->random()->id,
            'name' => $this->faker->name,
            'description' => $this->faker->text,
            'slug' => $this->faker->slug,
            'meta_title' => $this->faker->name,
            'meta_description' => $this->faker->name,
            'meta_keywords' => $this->faker->name,
        ];


    }
}
