<?php
/** @noinspection PhpUndefinedMethodInspection */
/** @noinspection PhpMissingReturnTypeInspection */

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageTranslate;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{

    private \Faker\Generator $faker;

    public function run()
    {
        $this->faker = \Faker\Factory::create('ru_RU');
        $pages = $this->pages();
        $translates = $this->translate();

        Page::insert($pages);
        PageTranslate::insert($translates);
    }


    private function pages()
    {
        return [
            ['name' => 'Home', 'sub_menu' => false,'parent_id' => null],
            ['name' => 'About', 'sub_menu' => false,'parent_id' => null],
            ['name' => 'Articles', 'sub_menu' => false,'parent_id' => null],
            ['name' => 'Gallery', 'sub_menu' => true,'parent_id' => null],
            ['name' => 'PhotoGalleries', 'sub_menu' => false, 'parent_id' => 4],
            ['name' => 'VideoGalleries', 'sub_menu' => false, 'parent_id' => 4],
            ['name' => 'Products', 'sub_menu' => false, 'parent_id' => null],
            ['name' => 'Contact', 'sub_menu' => false, 'parent_id' => null],
        ];
    }

    private function translate()
    {
        return [
            ['page_id' => 1, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 1, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 2, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 2, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 3, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 3, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 5, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 5, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 6, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 6, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 7, 'slug' => $this->faker->slug, 'language_id' => 2],
            ['page_id' => 7, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 8, 'slug' => $this->faker->slug, 'language_id' => 1],
            ['page_id' => 8, 'slug' => $this->faker->slug, 'language_id' => 1],
        ];
    }

}
