<?php

use App\Services\Menus;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;


Route::get('menus', [Menus::class,'menu'])->name('menus');

Route::apiResource('order',OrderController::class)->except('show');
