<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Order;
use App\Traits\CustomValidate;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    use CustomValidate;

    public function index()
    {
        return response()->success(Order::all());
    }


    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'total' => 'required|numeric',
            'status' => 'required|boolean',
            'coupon_id' => 'nullable|exists:coupons,id',
        ]);

        $order = Order::create($data);

        $data_details = self::setDates($request,'order_details');
        foreach ($data_details['details'] as  &$detail){
            $detail['order_id'] = $order->id;
        }
        unset($detail);

        $order->details()->upsert( $data_details['details'], ['product_id', 'order_id'] );

        return response()->success($order->load('details'));
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


    public function couponApply( string $name)
    {
        $coupon = Coupon::whereRelation('translations','name','=',$name)->first();
        return response()->success($coupon ? $coupon->load('translations'): null);

    }

}
