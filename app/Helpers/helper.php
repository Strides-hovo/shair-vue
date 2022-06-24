<?php

use App\Models\PhotoGalleryItem;
use App\Models\VideoGalleryItem;
use Illuminate\Support\Facades\Storage;

function StrPrepareForValidation($request, $type = 'image' ){

    $name = explode('/', $request->$type); //storage/video.mp4

    $type_name = end($name); //img.png

    $extension = substr( $type_name, strrpos( $type_name, '.') ) ;//.png

    $coll_name = $type . '_name';

    if ( !is_null($request->$coll_name) && strlen($request->$coll_name) > 1) {

        $new_name = $request->$coll_name . $extension; //new_name.mp4

        debug($request->$coll_name, $extension, $new_name );

        if (Storage::exists("public/{$type_name}")) {

            Storage::move("public/{$type_name}", "public/{$new_name}");

            if ($type === 'image'){
                PhotoGalleryItem::where($type, '/storage/' . $type_name)
                    ->update([$type => '/storage/' . $new_name, "{$type}_name" => strstr($new_name, '.', 1)]);
            }
            elseif ($type === 'video'){
                VideoGalleryItem::where($type, '/storage/' . $type_name)
                    ->update([$type => '/storage/' . $new_name, "{$type}_name" => strstr($new_name, '.', 1)]);
            }

            $request->merge(["{$type}_name" => strstr($new_name, '.', 1), $type => $new_name]);
        }
    } else {
        $request->merge(["{$type}_name" => strstr($type_name, '.', 1)]);
    }
}

