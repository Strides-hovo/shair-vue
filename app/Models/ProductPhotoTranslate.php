<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductPhotoTranslate extends Model
{
    use HasFactory, FilteredSlug;

    protected $guarded = [];
    public $timestamps = false;


    public function photo(): BelongsTo
    {
        return $this->belongsTo(ProductPhoto::class);
    }








}
