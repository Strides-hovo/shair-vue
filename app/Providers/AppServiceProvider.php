<?php

namespace App\Providers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success',function ($data,int $code = 200, $message = ''): JsonResponse{
            return response()->json([
                'status' => 'Success',
                'data' => $data,
                'message' => $message
            ], $code);
        });

        Response::macro('error',function ($message,int $code = 404): JsonResponse{
            return response()->json([
                'status' => 'Error',
                'message' => $message
            ], $code);
        });
    }
}
