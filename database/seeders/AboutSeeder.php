<?php

namespace Database\Seeders;

use App\Models\About;
use App\Models\AboutTranslate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        About::factory(1)->create();
        AboutTranslate::factory(2)->create();
    }
}
