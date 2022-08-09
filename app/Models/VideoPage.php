<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;


class VideoPage extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = [];

    protected $casts = ['status' => 'boolean'];
    
    private static $language_id = null;

  


    public static function withs(): Builder
    {
        return self::with(['translations','translate','galleries']);
    }


    public function loads(): VideoPage
    {
        return $this->load(['translations','translate','galleries'])->refresh();
    }


    public static function setLanguageId($language_id)
    {
        self::$language_id = $language_id;
    }


    public function galleries() :HasMany
    {
      return $this->hasMany(VideoPageGallery::class);
    }


    public function translate(): HasOne
    {
        if(!self::$language_id) self::$language_id = Language::actual()->id;
        return $this->hasOne(VideoPageTranslate::class)->where('language_id', self::$language_id);
    }


    public function translations() :HasMany
    {
      return $this->hasMany(VideoPageTranslate::class);
    }
}
