<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $guarded = [];

    private string $relationTranslate = ProductTranslate::class;

    protected $casts = [
        'status' => 'boolean',
        'rent' => 'boolean',
        'sale' => 'boolean',
        'guarantee' => 'boolean',
        'dimension' => 'boolean',
    ];


    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            $model->addition()->delete();
            $model->translations()->delete();
        });
    }


    public static function withs(bool $frontend = false): Builder
    {
        if ($frontend){
            return self::with(['addition', 'sizes', 'translations', 'translate', 'photos.translations', 'videos.translations', 'category.translations']);
        }
        return self::with(['addition', 'sizes', 'translations',  'photos.translations', 'videos.translations', 'category.translations']);
    }


    public function loads(): Product
    {
        return $this->load(['addition', 'sizes', 'translations', 'translate', 'photos', 'videos', 'prices'])->refresh();
    }


    /**
     * Relations
     */

    public function addition(): BelongsToMany
    {
        return $this->belongsToMany(self::class, 'product_additionals', 'additional_id', 'product_id', 'id', 'id');
    }


    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }

    public function category():HasOne
    {
        return $this->hasOne(Category::class,'id','category_id');
    }


    public function sizes(): HasManyThrough
    {
        return $this->HasManyThrough(CategorySize::class, Category::class, 'id', 'category_id')
            ->orderBy('category_sizes.height', 'desc');
    }


    public function photos(): HasMany
    {
        return $this->hasMany(ProductPhoto::class);
    }

    public function photo(): HasOne
    {
        return $this->hasOne(ProductPhoto::class);
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
