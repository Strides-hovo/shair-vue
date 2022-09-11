<?php
/** @noinspection PhpMissingReturnTypeInspection */

/** @noinspection PhpUnnecessaryLocalVariableInspection */

namespace App\Models;


use App\Traits\MakeLanguages;
use App\InterFaces\MakeRelations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

/**
 * @method static first()
 * @method static find(int $int)
 */
class Product extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages, HasRelationships;

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
        $fr = ['additions', 'sizes', 'translations',  'photos.translations', 'videos', 'category.translations'];
        if ($frontend){
            return self::with($fr);
        }

        return self::with($fr);
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
        // 'categories.id as category_id',
        'category_sizes.id as category_size_id',
        'product_sizes.status as status',
        'product_sizes.product_id',
        'product_sizes.sku',
        'product_sizes.price',
        'product_sizes.invoice_code',
        'product_sizes.delivery_sale',
        'product_sizes.delivery_rent',
    ];


    public function tt()
    {
        return $this
            ->HasManyThrough(CategorySize::class, Category::class, 'id', 'category_id','category_id','id')
            ->select(self::PRODUCT_SIZES)
            ->join('product_sizes','product_sizes.category_size_id','=','category_sizes.id')
            //->dd()
            ;
    }

 



    /**
     * Relations
     */

   /**
     * @tables product|category|category_sizes|product_sizes
     * product hasOne => category => hasMany => category_size => hasMany => product_size
     */

    public function sizes()
    {
        return $this
        ->hasManyDeep( ProductSize::class, [Category::class,CategorySize::class ],['id','product_sizes.product_id'])
        ->select(self::PRODUCT_SIZES);

    }


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
