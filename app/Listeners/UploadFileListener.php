<?php

namespace App\Listeners;

use Alexusmai\LaravelFileManager\Events\FilesUploading;
//use App\Http\Controllers\ImageController;

class UploadFileListener
{



    public function handle(FilesUploading $event)
    {

        if ( $files = $event->files()) {
//            ImageController::updateOrCreate($files);
        }
    }



}
