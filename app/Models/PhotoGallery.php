<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoGallery extends Model
{
    use HasFactory;

  

    protected $fillable = ['title','page_photo_gallery_id', 'status', 'sorting', 'slug','meta_title','meta_description','meta_keywords'];

    public function page()
    {
        return $this->belongsTo(PagePhotoGallery::class);
    }


    public function galleries(){
      return $this->hasMany(PhotoGalleriesItem::class);
    }

}
