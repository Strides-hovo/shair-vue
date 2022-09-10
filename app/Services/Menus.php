<?php
/** @noinspection PhpUndefinedMethodInspection */
/** @noinspection PhpMissingReturnTypeInspection */


namespace App\Services;

use App\Models\Page;

class Menus{
    

    public function menu()
    {
        return response()
            ->success(Page::with(['translations','children.translations'])
            ->whereNull('parent_id')->get());
    }


}
