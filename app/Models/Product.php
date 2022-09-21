<?php
/** @noinspection PhpMissingReturnTypeInspection */

/** @noinspection PhpUnnecessaryLocalVariableInspection */

namespace App\Models;


use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

/**
 * @method static first()
 * @method static find(int $int)
 * @property mixed $s
 */
class Product extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages, HasRelationships;

    protected $guarded = [];

    protected $appends = ['sizes'];

    public static string $loadSize = '2.1';

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


    public function scopeActive($query)
    {
        return $query->where('status', true);
    }
    

    public static function withs(bool $frontend = false): Builder
    {
        $fr = ['additions',  'translations',  'photos.translations', 'videos', 'category.translations'];
        if ($frontend){
            return self::with($fr);
        }

        return self::with($fr);
    }


    public function loads(): Product
    {
        return $this->load(['additions',  'translations', 'category.translations', 'photos.translations', 'videos', ])->refresh();
    }


    public function page(): HasOne
    {
        return $this->hasOne(Page::class,'name','page_name');
    }


    const PRODUCT_SIZES = [
        'categories.id as category_id',
        'width',
        'height',
        'category_sizes.id as category_size_id',
        'category_sizes.sorting as sorting',
        'product_sizes.id as product_size_id',
        'product_sizes.status as status',
        'product_sizes.product_id',
        'product_sizes.sku',
        'product_sizes.price',
        'product_sizes.invoice_code',
        'product_sizes.delivery_sale',
        'product_sizes.delivery_rent',
    ];



    public function s()
    {
        return $this
            ->HasManyThrough(CategorySize::class, Category::class, 'id', 'category_id','category_id','id')
            ->where('category_sizes.status',true)
            ->select(self::PRODUCT_SIZES)
            ->leftJoin('product_sizes','product_sizes.category_size_id','=','category_sizes.id');
    }


    public function sizes9()
    {
        return $this
            ->HasManyThrough(CategorySize::class, Category::class, 'id', 'category_id','category_id','id')
            ->where('category_sizes.status',true)
            ->select(['width','height'])
            ;

    }






    /**
     * @return mixed category_sizes use product_sizes
     * @filter if clear double, clear stranger data
     * @noinspection PhpInconsistentReturnPointsInspection
     */
    public function getSizesAttribute()
    {

        $result = $this->s->reject(function ($size){
            $double = $this->doubleId();
            if (!is_null($double)){
                return in_array($size->category_size_id,$double->toArray()) && $size->product_id !== $this->id;
            }
        })->map(function ($size){
            $isset = $size->product_id === $this->id;
            return $isset ? $size : $this->sizes_filtered($size);
        });

        unset($this->s);
        return $result->values()->all();
    }


    private function sizes_filtered($size)
    {
        return collect([
            "width" => $size->width,
            "height"=> $size->height,
            "category_size_id" => $size->category_size_id,
            "category_id" => $size->category_id,
            "sorting" => null,
            "product_size_id" => null,
            "status" => null,
            "product_id" => null,
            "sku" => null,
            "price" => null,
            "invoice_code" => null,
            "delivery_sale" => null,
            "delivery_rent" => null,
            "laravel_through_key" => $size->laravel_through_key
        ]);
    }



    private function doubleId()
    {
        $sizes = $this->s;
        $unique = $sizes->unique('category_size_id');
        $dupes = $sizes->diffAssoc($unique)->map(fn($size) => $size->category_size_id);
        if ($dupes) {
            return $dupes;
        } else {
            return null;
        }
    }






    /**
     * Relations
     */

   /**
     * @tables product|category|category_sizes|product_sizes
     * product hasOne => category => hasMany => category_size => hasMany => product_size
     */





    public function additions(): BelongsToMany
    {
        return $this->belongsToMany(self::class, 'product_additionals', 'product_id','additional_id',  'id', 'id');
    }




    public function category():HasOne
    {
        return $this->hasOne(Category::class,'id','category_id');
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

    /**
     * @param string $size
     */
    public static function setSize(string $size): void
    {
       self::$loadSize = $size;
    }


}
