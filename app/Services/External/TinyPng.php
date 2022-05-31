<?php


namespace App\Services\External;



class TinyPng
{

    const API_KEY = 'qYGZqFyVjdmhYdrQ9NVTzfQSHgTzCHMw';


    public static function optimiseImage (string $path)
    {
        \Tinify\setKey(self::API_KEY);

        $source = \Tinify\fromFile($path);
        $source->toFile($path);

    }


}