<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Relations\BelongsToJson;
use App\Traits\HasJsonRelationships;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasRelationships;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Coupon extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages,HasJsonRelationships ;

    protected $guarded = [];

    protected $casts  = [
        'category_ids' => 'json',
    ];

    public string $relationTranslate = CouponTranslate::class;

    public function categoryIds(): Attribute
    {
        return Attribute::make(
            get: fn($value) => json_decode($value, 1),
            set: fn($value) => json_encode($value, JSON_FORCE_OBJECT | JSON_NUMERIC_CHECK ),
        );
    }

    public function page(): ?HasOne
    {
        return null;
    }


    public static function withs(bool $frontend = false): Builder
    {
        return self::with('translations','translate','categories');
    }

    public function loads(): MakeRelations
    {
        return $this->load('translations','translate');
    }


    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }



    public function categories() : BelongsToJson
    {
        return $this->belongsToJson(Category::class, 'category_ids');
    }
    
    
}
