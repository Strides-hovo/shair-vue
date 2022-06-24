<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VideoGallery extends Model
{
    use HasFactory;

    protected $casts = ['status' => 'boolean'];

    protected $fillable = ['title','page_video_gallery_id', 'status', 'sorting', 'slug','meta_title','meta_description','meta_keywords'];

    public function page(): BelongsTo
    {
        return $this->belongsTo(PageVideoGallery::class,'page_video_gallery_id');
    }


    public function galleries() :HasMany
    {
        return $this->hasMany(VideoGalleryItem::class);
    }
}
