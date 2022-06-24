<?php

namespace Database\Factories;

use App\Models\VideoGallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoGalleryItem>
 */
class VideoGalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'video' => $this->faker->imageUrl,
            'video_name' => $this->faker->imageUrl,
            'video_gallery_id' => VideoGallery::all()->random()->id
        ];
    }
}
