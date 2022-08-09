<?php

namespace Database\Seeders;

use App\Models\VideoPage;
use App\Models\VideoPageGallery;
use App\Models\VideoPageTranslate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        VideoPage::factory(16)->create();
       
        VideoPageGallery::factory(32)->create();
        VideoPageTranslate::factory(32)->create();
    }
}
