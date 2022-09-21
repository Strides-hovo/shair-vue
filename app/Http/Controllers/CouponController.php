<?php
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Http\Requests\CouponRequest;
use App\Models\Coupon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CouponController extends Controller
{


    public function index(): JsonResponse
    {
        return response()->success(Coupon::withs()->get());
    }


    public function store(CouponRequest $request): JsonResponse
    {
        $coupon = Coupon::create($request->validated());
        return response()->success($coupon->loads());
    }


    public function update(CouponRequest $request, Coupon $coupon): JsonResponse
    {
        $coupon->update($request->validated());
        $this->translate($request, $coupon);

        return response()->success($coupon->loads());
    }


    public function destroy($ids): JsonResponse
    {
        if (!is_array($ids)) {
            $ids = explode(',', $ids);
        }
        Coupon::whereIn('id', $ids)->delete();

        return response()->success('coupons deleted');
    }


    public function copy(Coupon $coupon): JsonResponse
    {
        $new_coupon = $coupon->replicate();
        $new_coupon->save();
        $coupon->load('translations');

        foreach ($coupon->translations as $values) {
            $data = $values->toArray();
            $new_coupon->translations()->create([
                'language_id' => $data['language_id'],
                'name' => $data['name'],
                'coupon_id' => $new_coupon->id
            ]);
        }

        return response()->success($new_coupon->loads());
    }


    private function translate($request, Coupon $coupon): void
    {
        $data = Validator::make($request->translate, [
            'language_id' => 'required|exists:languages,id',
            'coupon_id' => 'required|exists:coupons,id',
            'name' => 'required|string',
        ]);

        try {
            $dates = $data->safe()->all();
            $coupon->translations()
                ->updateOrCreate(['language_id' => $data['language_id'], 'coupon_id' => $data['coupon_id']], $dates);
        } catch (\Exception $e) {
            return;
        }


    }


}
