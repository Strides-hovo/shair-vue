<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @method static first()
 */
class Category extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    public $timestamps = false;

    private string $relationTranslate = CategoryTranslate::class;

    protected $casts = ['status' => 'boolean'];

    protected $fillable = [
        'status', 'sorting'
    ];

    protected $attributes = [
        'status' => true,
        'sorting' => 1
    ];

    public static function withs(bool $frontend = false): Builder
    {

        $fr = ['translations','products.sizes', 'products.translations', 'products.photos.translations', 'products.videos'];
        if ($frontend){
            return self::with($fr);
        }
        return self::with([ 'translations', 'sizes']);
    }


    public function loads(): Category
    {
        return $this->load([ 'translations', 'sizes'])->refresh();
    }


    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            $model->sizes()->delete();
            $model->translations()->delete();
        });
    }


    public function sizes(): HasMany
    {
        return $this->hasMany(CategorySize::class);
    }


    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }


    public function page(): HasOne
    {
        return $this->hasOne(Page::class,'name','page_name');
    }


    public function products() : HasMany
    {
        return $this->hasMany(Product::class);
    }

}
