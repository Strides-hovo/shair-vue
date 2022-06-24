<?php

namespace Database\Factories;

use App\Models\PageVideoGallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoGallery>
 */
class VideoGalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name,
            'slug' => $this->faker->slug,
            'meta_title' => $this->faker->name,
            'page_video_gallery_id' => PageVideoGallery::all()->random()->id
        ];
    }
}
