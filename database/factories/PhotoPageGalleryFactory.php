<?php

namespace Database\Factories;


use App\Models\PhotoPage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhotoGallery>
 */
class PhotoPageGalleryFactory extends Factory
{
   
    public function definition()
    {

        return [
            'image' => $this->faker->imageUrl,
            'image_name' => $this->faker->name,
            'image_alt' => $this->faker->name,
            'image_title' => $this->faker->name,
            'photo_page_id' => PhotoPage::all()->random()->id
        ];

       
    }
}
