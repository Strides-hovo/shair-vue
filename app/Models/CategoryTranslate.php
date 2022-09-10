<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryTranslate extends Model
{
    use HasFactory,FilteredSlug;

    protected $guarded = [];
    public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


}
