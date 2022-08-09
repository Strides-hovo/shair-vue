<?php


namespace App\Services;

use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;
use App\Models\PhotoPage;

class Menus{
    
    const FIELDS = [
        'photo_pages.id',
        'photo_page_translates.photo_page_id',
        'photo_page_translates.language_id',
        'photo_page_translates.slug',
        'photo_page_translates.name',
    ];

    public function builder(Request $request)
    {
        return PhotoPage::
        leftJoin('photo_page_translates', 'photo_page_translates.photo_page_id','=','photo_pages.id')
        ->select(self::FIELDS)
        
        ->where('photo_pages.status',true)
        ->get();
    }



}
