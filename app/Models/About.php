<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    protected $fillable = [ 'language_id','title','content','slug','meta_title','meta_keywords','meta_description' ];

    
  
}
