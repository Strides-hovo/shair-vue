<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoGalleriesItem extends Model
{
    use HasFactory;

    protected $fillable = ['photo_gallery_id', 'status', 'sorting', 'image', 'image_name', 'image_alt', 'image_title'];


    public function image(): Attribute
    {
        return Attribute::make(
            set: fn($value) => 
            str_contains('/storage',$value) 
            ? $value 
            : ($value[0] === '/' 
            ?  $value 
            : '/storage/' . $value),

            get: fn($value) => str_contains('http', $value) ? $value : ( $value[0] === '/' ?  $value : '/' . $value),

        );

    }


    public function gallery()
    {
        return $this->belongsTo(PhotoGallery::class);
    }


}
