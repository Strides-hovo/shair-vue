<?php

namespace Database\Seeders;

use App\Models\PagePhotoGallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PagePhotoGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PagePhotoGallery::factory(2)->create();
    }
}
