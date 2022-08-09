<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class VideoPageGallery extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = ['status' => 'bool'];
    
    protected $fillable = ['video_page_id', 'status', 'sorting', 'video', 'video_name', 'video_alt', 'video_title'];



    public function video(): Attribute
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

    public function video_page():BelongsTo
    {
        return $this->belongsTo(VideoPage::class);
    }


}
