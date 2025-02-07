<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageVideoGallery extends Model
{
    use HasFactory;


    public $timestamps = false;

    protected $fillable = ['language_id'];

    public function language()
    {
        return $this->belongsTo(Language::class);
    }


}
