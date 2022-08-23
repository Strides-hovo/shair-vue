<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class PhotoPage extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    public $timestamps = false;

    protected $guarded = [];

    protected $casts = ['status' => 'boolean'];

    private string $relationTranslate = PhotoPageTranslate::class;



    public static function withs($frontend = false): Builder
    {
        return self::with(['translations','translate','galleries']);
    }


    public function loads(): PhotoPage
    {
        return $this->load(['translations','translate','galleries'])->refresh();
    }



    public function galleries() :HasMany
    {
      return $this->hasMany(PhotoPageGallery::class);
    }



}
