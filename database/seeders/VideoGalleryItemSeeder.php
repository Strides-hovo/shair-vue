<?php

namespace Database\Seeders;

use App\Models\VideoGalleryItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoGalleryItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        VideoGalleryItem::factory(5)->create();
    }
}
