<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'product_size_id',
        'quantity',
        'price',
        'height',
        'width',
    ];

    public $timestamps = false;

    public function order():BelongsTo
    {
        return $this->belongsTo(Order::class);
    }


    public function product():BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

}
