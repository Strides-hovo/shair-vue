<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @method static Create(mixed $validated)
 * @method static find($id)
 */
class PhotoGalleryItem extends Model
{
    use HasFactory;

    protected $casts = ['status' => 'bool'];
    protected $fillable = ['photo_gallery_id', 'status', 'sorting', 'image', 'image_name', 'image_alt', 'image_title'];




    public function image(): Attribute
    {
        return Attribute::make(
            set: fn($value) => 
             str_contains($value,'/storage') || 
             str_contains($value,'http') || 
             $value[0] === '/' 
             ? $value
            : '/storage/' . $value,

            get: fn($value) => 
            str_contains($value,'/storage') || 
            str_contains($value,'http') || 
            $value[0] === '/' 
            ? $value
           : '/storage/' . $value,
            
        );
    }


    public function gallery(): BelongsToMany
    {
        return $this->belongsToMany(PhotoGallery::class);
    }


}
