<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Home extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $guarded = [];

    protected $casts = [
        'brands' => 'array',
        'abouts' => 'array',
    ];


    private string $relationTranslate = HomeTranslate::class;

    public static function withs(bool $frontend = false): Builder
    {
        return self::with('translations','icons.translations','page.translations','articles.translations');
    }

    public function loads(): MakeRelations
    {
        return $this->load('translations','icons.translations','page.translations','articles.translations');
    }


    public function icons(): HasMany
    {
        return $this->hasMany(HomeIcon::class);
    }


    public function page(): HasOne {
        return $this->hasOne(Page::class,'name','page_name');
    }


    public function articles(): HasMany
    {

         return $this->hasMany(Article::class,'status','id')
             ->where('in_home',true);
    }




    public function brands() :Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? json_decode($value, 1) : [],
            set: fn($value) => json_encode($value, JSON_FORCE_OBJECT | JSON_NUMERIC_CHECK ),
        );
    }



    public function abouts() :Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? json_decode($value, 1) : [],
            set: fn($value) => json_encode($value, JSON_FORCE_OBJECT | JSON_NUMERIC_CHECK ),
        );
    }




}
