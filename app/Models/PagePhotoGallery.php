<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PagePhotoGallery extends Model
{
    use HasFactory;

    protected $hidden = [
        'created_at','updated_at'
    ];

    protected $fillable = ['language_id'];



    public function photoGalleries()
    {
        return $this->hasMany(PhotoGallery::class);
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }



    
}
