<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductVideo;
use Illuminate\Http\Request;

class ProductVideoController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'url' => 'required|string',
            'product_id' => 'required|exists:products,id'
        ]);

        ProductVideo::create($data);
        $product = Product::find($data['product_id']);
        return response()->success($product->loads());
    }
}
