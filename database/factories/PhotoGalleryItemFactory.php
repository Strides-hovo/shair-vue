<?php

namespace Database\Factories;
use App\Models\PhotoGallery;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhotoGalleryItem>
 */
class PhotoGalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
          'image' => $this->faker->imageUrl,
          'image_name' => $this->faker->imageUrl,
          'photo_gallery_id' => PhotoGallery::all()->random()->id
        ];
    }



}
