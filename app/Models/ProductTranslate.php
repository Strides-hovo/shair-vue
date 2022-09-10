<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductTranslate extends Model
{
    use HasFactory,FilteredSlug;

    protected $guarded = [];
    
    public $timestamps = false;

    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function language():BelongsTo
    {
        return $this->belongsTo(Language::class);
    }
    
}
