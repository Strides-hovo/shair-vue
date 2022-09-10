<?php

namespace App\Models;

use App\Models\Page;
use App\Traits\MakeLanguages;
use App\InterFaces\MakeRelations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;


/**
 * @method static whereNot(string $string, $id)
 */
class Article extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $attributes = [
        'page_name' => 'Articles'
    ];

    protected $casts = ['sorting' => 'integer'];

    protected $fillable = ['product_id','published_at','image','image_name','status','sorting','page_name'];

    private static bool $recommended = false;

    private string $relationTranslate = ArticleTranslate::class;


    public static function withs(bool $frontend = false ): Builder
    {

        self::$recommended = $frontend;

        if (self::$recommended === true){
            return self::with(['translations','product.translations','product.photos.translations','page.translations' ]);
        }
        else{
            return self::with(['translations','page.translations' ]);
        }

    }



    public function loads(): self
    {
        if (self::$recommended === true){
            return $this->load(['translate', 'translations','product.translations'])
                ->setAppends(['recommended']);
        }else{
            return $this->load([ 'translations','page.translations'])->refresh();
        }

    }


    public function product(): BelongsTo
    {
        return $this->belongsTO(Product::class);
    }


    public function recommended(): Attribute
    {
        return Attribute::make(
            get: function (){
                return self::$recommended === true ? self::whereNot('id',$this->id)->inRandomOrder()->limit(2)->get()->load(['translations']) : [];
            }
        );
    }


    public function page(): HasOne
    {
        return $this->hasOne(Page::class,'name','page_name');
    }



}
