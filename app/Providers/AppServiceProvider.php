<?php
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Providers;

use App\Models\Category;
use App\Models\Coupon;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{



    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {

        Response::macro('success',function ($data,int $code = 200, $message = ''): JsonResponse{
             return response()->json([
                'status' => 'Success',
                'message' => $message,
                'data' => $data
            ], $code);
        });

        Response::macro('error',function (string $message = null, int $code = 404, $data = null): JsonResponse{
             return response()->json([
                'status' => 'Error',
                'message' => $message,
                'data' => $data
            ], $code);
        });



    }
}
