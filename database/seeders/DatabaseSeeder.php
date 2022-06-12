<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Image;
use App\Models\Language;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    public function run()
    {

        $this->call(LanguageSedder::class);
        $this->call(PagePhotoGallerySeeder::class);
        $this->call(PhotoGallerySeeder::class);
        // $this->call(Category::factory(5)->create());
        // $this->call(Image::factory(30)->create());
        // $this->call(Product::factory(30)->create());

    }
}
