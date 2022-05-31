<?php

namespace App\Listeners;

use Alexusmai\LaravelFileManager\Events\Deleting;
use App\Http\Controllers\ImageController;

class DeleteFileListener
{



    public function handle(Deleting $event)
    {
        if (!empty($items = $event->items())){
            ImageController::destroy($items);
        }
    }
}
