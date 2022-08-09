<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VideoPageTranslate extends Model
{
    use HasFactory;


    protected $guarded = [];


    public $timestamps = false;


    public function video_page():BelongsTo
    {
        return $this->belongsTo(VideoPage::class);
    }

}
