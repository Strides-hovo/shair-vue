<?php

namespace App\Services;

use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class Translate
{

    /**
     * @param Request $request
     * @return string|null
     */
    public static function store(Request $request): string|null
    {

       $request->validate([
            'key' => 'required|exists:languages,code',
            'data' => 'required'
        ]);

       $key = $request->key;
       $data = $request->data;

        try {
            File::put(resource_path("js/translate/{$key}.json"),json_encode($data,JSON_PRETTY_PRINT));
        }
        catch (\Exception $e){
            return $e->getMessage();
        }
        return null;
    }



    public static function destroy(array $ids): void
    {
         $codes = Language::whereIn('id', $ids)->get('code')->pluck('code');
         foreach ($codes as $code){
             File::delete(resource_path("js/translate/{$code}.json"));
         }
    }


    public static function update(string $old_key, string $new_key): void
    {
        if (File::exists(resource_path("js/translate/{$old_key}.json"))){
            File::move(resource_path("js/translate/{$old_key}.json"), resource_path("js/translate/{$new_key}.json"));
        }

    }

}