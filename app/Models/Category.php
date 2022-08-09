<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @method static first()
 */
class Category extends Model
{
    use HasFactory;


    private static mixed $language_id = null;

    protected $fillable = [
        'status','sorting'
    ];


    public static function setLanguageId($language_id)
    {
        self::$language_id = $language_id;
    }


    public static function withs(): Builder
    {
        return self::with(['translate','translations','sizes']);
    }


    public function loads(): Category
    {
        return $this->load(['translate','translations','sizes']);
    }





    protected static function boot() {
        parent::boot();

        static::deleting(function($model) {
            $model->sizes()->delete();
            $model->translations()->delete();
        });
    }








    public function sizes(): HasMany
    {
        return $this->hasMany(CategorySize::class);
    }



    public function language():BelongsTo
    {
        return $this->belongsTo(Language::class);
    }


    public function translate():HasOne
    {
        if(!self::$language_id) self::$language_id = Language::actual()->id;
        return $this->hasOne(CategoryTranslate::class)->where('language_id', self::$language_id);
    }

    public function translations(): HasMany
    {
        return $this->hasMany(CategoryTranslate::class);
    }




}
