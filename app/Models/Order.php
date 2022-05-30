<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;



    public function products_data()
    {
        $products = [
            'items' => [
                'item' => [
                    'product_id' => '',
                    'count' => '',
                    'price' => '',
                ]
            ]
        ];


    }




}
