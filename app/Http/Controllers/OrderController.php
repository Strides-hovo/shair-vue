<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return response()->success(Order::all());
    }
 

    public function store(Request $request)
    {
        $data = $request->validate([
            'product_id' => 'required|exists:products,id',
            'product_size_id' => 'required|exists:product_sizes,id',
            'quantity' => 'required|numeric',
            'cost' => 'required|numeric',
            'height' => 'required|string',
            'width' => 'required|numeric',
        ]);
        $order = Order::create($data);
        return response()->success($order);
    }



    public function update(Request $request, Order $order)
    {
        $data = $request->validate([
            'product_id' => 'required|exists:products,id',
            'product_size_id' => 'required|exists:product_sizes,id',
            'quantity' => 'required|numeric',
            'cost' => 'required|numeric',
            'height' => 'required|string',
            'width' => 'required|numeric',
        ]);
        $order->update($data);

        return response()->success($order);
    }


    public function destroy(Order $order)
    {
        $order->delete();
        return response()->success('order deleted');
    }


}
