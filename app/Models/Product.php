<?php
/** @noinspection PhpMissingReturnTypeInspection */

/** @noinspection PhpUnnecessaryLocalVariableInspection */

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

/**
 * @method static first()
 * @method static find(int $int)
 */
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

    protected $attributes = [
        'status' => true,
        'rent' => true,
        'sale' => true,
        'guarantee' => true,
        'dimension' => true,
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
            return self::with(['additions', 'sizes', 'translations',  'photos.translations', 'videos.translations', 'category.translations']);
        }

        return self::with(['additions', 'sizes', 'translations',  'photos.translations', 'videos.translations', 'category.translations']);
    }


    public function loads(): Product
    {
        return $this->load(['additions', 'sizes', 'translations', 'category.translations', 'photos.translations', 'videos', ])->refresh();
    }


    public function page(): HasOne
    {
        return $this->hasOne(Page::class,'name','page_name');
    }


    const PRODUCT_SIZES = [
        'width',
        'height',
        'categories.id as category_id',
        'category_sizes.id as category_size_id',
        'product_sizes.status as status',
        'product_sizes.sku',
        'product_sizes.price',
        'product_sizes.invoice_code',
        'product_sizes.delivery_sale',
        'product_sizes.delivery_rent',
    ];


    public function sizes()
    {

       return $this
            ->HasManyThrough(CategorySize::class, Category::class, 'id', 'category_id','category_id','id')
            ->select(self::PRODUCT_SIZES)
            ->leftJoin('product_sizes','product_sizes.category_size_id','=','category_sizes.id');

    }



    /**
     * Relations
     */

    public function additions(): BelongsToMany
    {
        return $this->belongsToMany(self::class, 'product_additionals', 'product_id','additional_id',  'id', 'id');
    }




    public function category():HasOne
    {
        return $this->hasOne(Category::class,'id','category_id');
    }


//    public function sizes(): HasMany
//    {
//        return $this->hasMany(ProductSize::class);
//    }


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







}
