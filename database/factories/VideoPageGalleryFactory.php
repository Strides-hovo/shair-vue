<?php

namespace Database\Factories;

use App\Models\VideoPage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoGallery>
 */
class VideoPageGalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $this->faker->addProvider(new \Faker\Provider\Youtube($this->faker));
        return [
            'video' => $this->faker->youtubeUri(),
            'video_name' => $this->faker->name,
            'video_alt' => $this->faker->name,
            'video_title' => $this->faker->name,
            'video_page_id' => VideoPage::all()->random()->id
        ];
    }
}
