<?php

namespace Database\Seeders;

use App\Models\PagePhotoGallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PhotoPage;
use App\Models\PhotoPageGallery;
use App\Models\PhotoPageTranslate;


class PhotoPageSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PhotoPage::factory(16)->create();
        PhotoPageGallery::factory(32)->create();
        PhotoPageTranslate::factory(32)->create();

    }
}
