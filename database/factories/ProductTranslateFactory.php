<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;



class ProductTranslateFactory extends Factory
{

    private static int $i = 0;
    private static int $l = 1;
    private static int $id = 0;

    public function definition()
    {

       $this->generate();
        return meta_seeder( [
            'product_id' => self::$id,
            //'language_id' => self::$l,
            'name' => $this->faker->name,
            'short_description' => $this->faker->text,
            'description' => $this->faker->realText,

        ],$this->faker,self::$l);
    }


    public function generate()
    {
        if (self::$i % 2 === 0){
            self::$l = 1;
            self::$id++;
        }
        else{
            self::$l = 2;
        }
        self::$i++;
    }




}
