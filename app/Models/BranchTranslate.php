<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BranchTranslate extends Model
{
    use HasFactory, FilteredSlug;

    protected $guarded = [];

    public $timestamps = false;
}
