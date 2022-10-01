<?php

use App\Services\Menus;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;


Route::get('menus', [Menus::class,'menu'])->name('menus');
Route::post('bread-crumbs', [Menus::class,'getBreadCrumbs'])->name('breadcrumbs');

Route::apiResource('order',OrderController::class)->except('show');
Route::post('coupon-name/{name}',[OrderController::class,'couponApply'])->name('coupon.apply');
