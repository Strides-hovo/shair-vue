<?php


use App\Http\Controllers\PhotoGalleryItemController;
use App\Http\Controllers\VideoGalleryController;
use App\Http\Controllers\VideoGalleryItemController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\PhotoGalleryController;


Route::post('register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', [AuthController::class,'user']);

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::group(['prefix' => 'admin'],function (){
    
    Route::apiResource('language', \App\Http\Controllers\LanguageController::class)->except(['destroy']);
    Route::delete('language-delete/{ids?}', [\App\Http\Controllers\LanguageController::class,'destroy'])->name('language.destroy');

    Route::group([],function (){

        Route::apiResource('photoGallery',PhotoGalleryController::class);
        Route::apiResource('photoGalleryItems',PhotoGalleryItemController::class)->only(['store','update']);
        Route::delete('photoGalleryItems/{ids}',[PhotoGalleryItemController::class,'destroy'])->name('photoGalleryItems.destroy');

        Route::apiResource('videoGallery',VideoGalleryController::class);
        Route::apiResource('videoGalleryItems',VideoGalleryItemController::class)->only(['store','update']);
        Route::delete('videoGalleryItems/{ids}',[VideoGalleryItemController::class,'destroy'])->name('videoGalleryItems.destroy');

    });



    Route::get('all-images/{type?}',[\App\Services\Images::class,'getImages'])->name('get.images');
    Route::post('image-upload',[\App\Services\Images::class,'upload'])->name('image.upload');


});
