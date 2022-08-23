<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ArticleTranslate extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;


    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

}
