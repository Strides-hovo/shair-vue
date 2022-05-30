<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', [AuthController::class,'user']);

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::group(['prefix' => 'admin'],function (){
    Route::apiResource('image', \App\Http\Controllers\ImageController::class);
    Route::apiResource('language', \App\Http\Controllers\LanguageController::class)->except(['destroy']);
    Route::delete('language-delete/{ids?}', [\App\Http\Controllers\LanguageController::class,'destroy'])->name('language.destroy');
});
