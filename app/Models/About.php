<?php

namespace App\Models;

use App\Models\Page;
use App\Traits\MakeLanguages;
use App\InterFaces\MakeRelations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class About extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;


    private string $relationTranslate = AboutTranslate::class;


    public static function withs( $frontend = false): Builder
    {
        return self::with([ 'translate','translations']);
    }

    public function loads(): MakeRelations
    {
        return $this->load(['translate', 'translations'])->refresh();
    }


    public function page(): ?HasOne {
        return $this->hasOne(Page::class,'name','page_name');
    }
}
