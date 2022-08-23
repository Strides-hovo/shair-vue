<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @method static first()
 */
class Category extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    private string $relationTranslate = CategoryTranslate::class;

    protected $casts = ['status' => 'boolean'];
    protected $fillable = [
        'status', 'sorting'
    ];


    public static function withs($frontend = false): Builder
    {
        return self::with(['translate', 'translations', 'sizes']);
    }


    public function loads(): Category
    {
        return $this->load(['translate', 'translations', 'sizes'])->refresh();
    }


    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            $model->sizes()->delete();
            $model->translations()->delete();
        });
    }


    public function sizes(): HasMany
    {
        return $this->hasMany(CategorySize::class);
    }


    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }


}
