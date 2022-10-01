<?php

namespace Database\Seeders;


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

            //VideoPageSeeder::class,
            ArticleSeeder::class,
            AboutSeeder::class,
            PageSeeder::class,
            BranchSeeder::class,

        ]);

    }
}
