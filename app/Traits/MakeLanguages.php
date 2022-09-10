<?php

namespace App\Traits;

use App\Models\Language;


use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait MakeLanguages {

    use FilteredSlug;
    
    private static int|null $language_id = null;


    public static function setLanguageId($language_id): void
    {
        self::$language_id = $language_id;
    }


    public function translate(): HasOne
    {
        if (!self::$language_id) self::$language_id = Language::actual()->id;
        return $this->hasOne($this->relationTranslate)->where('language_id', self::$language_id);
    }


    public function translations(): HasMany
    {
        return $this->hasMany($this->relationTranslate);
    }




    /**
     * @throws \ErrorException
     */

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        if (!$this->relationTranslate) {
            throw new \ErrorException("Model {$this->getTable()} Property relationTranslate is required ");
        }
    }


}