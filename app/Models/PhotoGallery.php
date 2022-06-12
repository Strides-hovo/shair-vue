<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoGallery extends Model
{
    use HasFactory;

    protected $fillable = ['page_photo_gallery_id', 'status', 'sorting', 'title', 'image', 'image_name', 'image_alt', 'image_title'];

    public function page()
    {
        return $this->belongsTo(PagePhotoGallery::class);
    }

}
