<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use JetBrains\PhpStorm\NoReturn;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    private static $language_id = null;

    protected $casts = [
        'status' => 'boolean',
        'rent' => 'boolean',
        'sale' => 'boolean',
        'guarantee' => 'boolean',
        'dimension' => 'boolean',
    ];


    protected static function boot() {
        parent::boot();

        static::deleting(function($model) {
            $model->addition()->delete();
            $model->translations()->delete();
        });
    }


    public static function setLanguageId($language_id)
    {
        self::$language_id = $language_id;
    }


    public static function withs(): Builder
    {
        return self::with(['addition','sizes','translations','translate','photos','videos','prices']);
    }


    public function loads(): Product
    {
        return $this->load(['addition','sizes','translations','translate','photos','videos','prices']);
    }


    /**
     * Relations
     */

    public function addition(): BelongsToMany
    {
        return $this->belongsToMany(self::class,'product_additionals','additional_id','product_id','id','id');
    }


    public function translate(): HasOne
    {
        if(!self::$language_id) self::$language_id = Language::actual()->id;
        return $this->hasOne(ProductTranslate::class)->where('language_id', self::$language_id);
    }


    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    public function category(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }




    public function sizes(): HasManyThrough
    {
        return $this->HasManyThrough(CategorySize::class,Category::class,'id','category_id')
            ->orderBy('category_sizes.height', 'desc');
    }

    public function translations(): HasMany
    {
        return $this->HasMany(ProductTranslate::class);
    }



    public function photos():HasMany
    {
        return $this->hasMany(ProductPhoto::class);
    }

    public function videos(): HasMany
    {
        return $this->hasMany(ProductVideo::class);
    }


    public function prices()
    {
        return $this->hasMany(ProductPrice::class)->orderBy('product_prices.height', 'desc');;
    }

}
