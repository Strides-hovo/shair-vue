<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Contact extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $guarded = [];

    private string $relationTranslate = ContactTranslate::class;



    
    
    
    
    
    public static function withs($frontend = false): Builder
    {
        return self::with('translations');
    }


    public function loads(): MakeRelations
    {
        return self::load('translations');
    }

    public function page(): ?HasOne
    {
        return $this->hasOne(Page::class, 'name', 'page_name');
    }
    
    
    
    
}
