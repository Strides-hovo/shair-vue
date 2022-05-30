<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Storage;

class UploadFileListener
{




    public function handle( $event)
    {
        if (!empty($files = $event->files())){
            foreach ($files as $file) {
              if( Storage::exists("public/{$file['path']}") ){
                  $old_file = $file;
              }
              else{
                  $new_file = $file;
              }
            }
        }
    }
}
