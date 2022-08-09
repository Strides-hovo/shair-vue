<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Image;
use App\Models\Language;
use App\Models\PageVideoGallery;
use App\Models\Product;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    public function run()
    {


        $this->call([
            LanguageSedder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            PhotoPageSedder::class,
            
            VideoPageSeeder::class,
           
        ]);

    }
}
