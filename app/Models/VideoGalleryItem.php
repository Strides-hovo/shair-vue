<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class VideoGalleryItem extends Model
{
    use HasFactory;

    protected $casts = ['status' => 'boolean'];

    protected $fillable = ['video_gallery_id', 'status', 'sorting', 'video', 'video_name', 'video_alt', 'video_title'];

    public function gallery(): BelongsToMany
    {
        return $this->belongsToMany(VideoGallery::class);
    }



    public function video(): Attribute
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

}
