<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Services\External\TinyPng;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    public function index()
    {

    }


    public static function updateOrCreate(array $files)
    {
        $data = [];
        foreach ($files as $file) {
            $data['name'] = substr($file['name'], 0, -(strlen($file['extension']) + 1));
            $data['src'] = $file['path'];
            $images[] = Image::updateOrCreate([
                'src' => $data['src']
            ], $data);
        }

        foreach ($files as $file) {
            $file_path = public_path() . "/storage{$file['path']}";
            //debug($file_path);
            /*if (file_exists($file_path)){
                TinyPng::optimiseImage($file_path);
            }*/
        }

    }


    public static function destroy(array $items)
    {

        foreach ($items as $file) {
            try {
                $src = str_contains($file['path'], '/') ? $file['path'] : '/' . $file['path'];
                Image::where('src', $src)->delete();
            } catch (\Exception $e) {
                throw new \ErrorException('Image cannot be deleted');
            }
        }
    }


    public function update(Request $request, Image $image)
    {
        //
    }


}
