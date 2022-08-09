<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class PhotoPageGallery extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = ['status' => 'bool'];
    
    protected $fillable = ['photo_page_id', 'status', 'sorting', 'image', 'image_name', 'image_alt', 'image_title'];



    public function image(): Attribute
    {
        return Attribute::make(
            get: fn($value) =>
            str_contains($value,'/storage') ||
            str_contains($value,'http') ||
            $value[0] === '/'
            ? $value
           : '/storage/' . $value,

            set: fn($value) =>
             str_contains($value,'/storage') ||
             str_contains($value,'http') ||
             $value[0] === '/'
             ? $value
            : '/storage/' . $value,
            
        );
    }

    public function photo_page():BelongsTo
    {
        return $this->belongsTo(PhotoPage::class);
    }


}
