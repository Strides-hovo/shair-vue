<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoGalleriesItem extends Model
{
    use HasFactory;

    protected $fillable = ['photo_gallery_id', 'status', 'sorting', 'title', 'image', 'image_name', 'image_alt', 'image_title'];


    public function gallery(){
      return $this->belongsTo(PhotoGallery::class);
    }




}
