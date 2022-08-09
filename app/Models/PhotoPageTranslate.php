<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PhotoPageTranslate extends Model
{
    use HasFactory;


    protected $guarded = [];


    public $timestamps = false;


    public function photo_page():BelongsTo
    {
        return $this->belongsTo(PhotoPage::class);
    }

}
