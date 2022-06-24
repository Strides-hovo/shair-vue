<?php

namespace Database\Seeders;

use App\Models\PageVideoGallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageVideoGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PageVideoGallery::factory(2)->create();
    }
}
