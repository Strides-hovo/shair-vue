<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\ArticleTranslate;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Article::factory(6)->create();
        ArticleTranslate::factory(12)->create();
    }
}
