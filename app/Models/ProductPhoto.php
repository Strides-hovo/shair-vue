<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ProductPhoto extends Model
{
    use HasFactory;

    protected $guarded = [];

    private static $language_id;

    protected $with = ['translations','translate'];


    public static function setLanguageId($language_id)
    {
        self::$language_id = $language_id;
    }


    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function translations():HasMany
    {
        return $this->HasMany(ProductPhotoTranslate::class);
    }


    public function translate():HasOne
    {
        if(!self::$language_id) self::$language_id = Language::actual()->id;
        return $this->HasOne(ProductPhotoTranslate::class)->where('language_id', self::$language_id);
    }

}
