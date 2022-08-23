<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
