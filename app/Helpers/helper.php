<?php

use Illuminate\Support\Facades\Storage;

function StrPrepareForValidation($request, $model,  $type = 'image'): void
{

    $name = explode('/', $request->$type); //storage/video.mp4

    $type_name = end($name); //img.png

    $extension = substr( $type_name, strrpos( $type_name, '.') ) ;//.png

    $coll_name = $type . '_name';

    if ( !is_null($request->$coll_name) && strlen($request->$coll_name) > 1) {

        $new_name = str_replace($type_name,$request->$coll_name . $extension,$request->$type);//new_name.mp4

        $array = explode('/', $new_name);
        $_name = end($array);

        if (Storage::exists("public/{$request->$type}")) {

            Storage::move("public/{$request->$type}", "public/{$new_name}");

            $model::where($type, '/storage/' . $type_name)
                ->update([$type => '/storage/' . $new_name, "{$type}_name" => strstr($_name, '.', 1)]);

            $request->merge(["{$type}_name" => strstr($_name, '.', 1), $type => $new_name]);
        }
    } else {
        $request->merge(["{$type}_name" => strstr($type_name, '.', 1)]);
    }
}


/**
 * model image_name, request new image name
 */
function changeImageName(string $imageOldName,string $imageNewName ): string|null{

    $imageOldName = str_replace('/storage','',$imageOldName);

    if (Storage::exists("public{$imageOldName}")){

        $path = explode('/',$imageOldName);
        $name = end($path);

        $newPath = str_replace(strstr($name,'.',true),$imageNewName,$path);
        $newPath = implode('/',$newPath);

        Storage::copy("public{$imageOldName}", "public/{$newPath}");

        return '/storage' . $newPath;
         
    }
    return null;
}






