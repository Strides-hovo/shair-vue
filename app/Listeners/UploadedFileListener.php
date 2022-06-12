<?php

namespace App\Listeners;

use Alexusmai\LaravelFileManager\Events\FilesUploaded;
use App\Services\External\TinyPng;
use Illuminate\Http\Request;

class UploadedFileListener
{

    private $event;
    private $overwrite;


    public function __construct(Request $request)
    {

        $this->event = $request->file('files');
        $this->overwrite = $request->input('overwrite');

    }


    public function handle(FilesUploaded $event)
    {

        if (!empty($this->event)) {

            $files = $event->files();

            foreach ($files as $key => $file) {
                $file_path = public_path() . "/storage{$file['path']}";

                if (file_exists($file_path)) {
                    //TinyPng::optimiseImage($file_path);
                }
            }

        }

    }


    public function __call($name, $arguments)
    {

    }
}
