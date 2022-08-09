<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\VideoPage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoGalleryItem>
 */
class VideoPageTranslateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'slug' => $this->faker->slug,
            'language_id' => Language::all()->random()->id,
            'video_page_id' => VideoPage::all()->random()->id,
            'name' => $this->faker->name,
            'description' => $this->faker->text,
            'meta_title' => $this->faker->name,
            'meta_description' => $this->faker->name,
            'meta_keywords' => $this->faker->name,
        ];
    }
}
