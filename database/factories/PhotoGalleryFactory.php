<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\PagePhotoGallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhotoGallery>
 */
class PhotoGalleryFactory extends Factory
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
            'page_photo_gallery_id' => PagePhotoGallery::all()->random()->id
        ];
    }
}
