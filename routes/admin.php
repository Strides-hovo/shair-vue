<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\Galleries\PhotoPageController;
use App\Http\Controllers\Galleries\PhotoPageGalleryController;
use App\Http\Controllers\Galleries\VideoPageController;
use App\Http\Controllers\Galleries\VideoPageGalleryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductPhotoController;
use Illuminate\Support\Facades\Route;


Route::post('register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('user', [AuthController::class,'user']);

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::group(['prefix' => 'admin','middleware' => 'api'],function (){
    
    Route::apiResource('language', \App\Http\Controllers\LanguageController::class)->except(['destroy']);
    Route::delete('language-delete/{ids?}', [\App\Http\Controllers\LanguageController::class,'destroy'])->name('language.destroy');

    Route::group([],function (){

        Route::apiResource('photo-page',PhotoPageController::class)->except(['show']);

        Route::apiResource('photo-gallery',PhotoPageGalleryController::class)->only(['store','update']);
        Route::delete('photo-gallery/{ids}',[PhotoPageGalleryController::class,'destroy'])->name('photo-gallery.destroy');


        Route::apiResource('video-page',VideoPageController::class)->except(['show']);

        Route::apiResource('video-gallery',VideoPageGalleryController::class)->only(['store','update']);
        Route::delete('video-gallery/{ids}',[VideoPageGalleryController::class,'destroy'])->name('video-gallery.destroy');

        Route::get('page',[\App\Http\Controllers\PageController::class, 'index'])->name('page.index');
        Route::post('page',[\App\Http\Controllers\PageController::class, 'firstOrCreate'])->name('page.firstOrCreate');
       

    });

    Route::group([],function(){
        Route::apiResource('about', AboutController::class )->only(['index','store']);
        Route::post('about-update',[AboutController::class,'uploadImage'])->name('tiny.upload');

        Route::apiResource('article',\App\Http\Controllers\ArticleController::class)->except('show');
    });

    Route::get('all-images/{type?}',[\App\Services\Images::class,'getImages'])->name('get.images');
    Route::post('image-upload',[\App\Services\Images::class,'upload'])->name('image.upload');



    Route::group([],function (){
        Route::apiResource('category',CategoryController::class)->except('show');
        Route::apiResource('category-size',\App\Http\Controllers\CategorySizeController::class)->except(['show','index','destroy']);
        Route::delete('category-size-destroy/{ids}',[\App\Http\Controllers\CategorySizeController::class,'destroy'])->name('category-size.destroy');

        Route::apiResource('product',ProductController::class)->except(['destroy']);
        Route::delete('product/{ids}', [ProductController::class,'destroy'])->name('product.destroy');

        Route::put('product/status/{status}', [ProductController::class,'status'])->name('product.status');
        Route::post('product/copy', [ProductController::class,'copy'])->name('product.copy');
        Route::put('product/addition/{product}', [ProductController::class,'updateAdditions'])->name('product.update.additions');
        Route::delete('product/addition/{product}/{ids}', [ProductController::class,'deleteAdditions'])->name('product.delete.additions');

        Route::apiResource('product-photo',ProductPhotoController::class)->only(['store','update']);
        Route::delete('product-photo/{ids}', [ProductPhotoController::class,'destroy'])->name('product-photo.destroy');
        Route::post('product-size',[\App\Http\Controllers\ProductSizeController::class,'updateOrCreate'])->name('product.size.updateOrCreate');
        Route::post('product-video',[\App\Http\Controllers\ProductVideoController::class,'store'])->name('product.video.store');

        Route::apiResource('coupon',CouponController::class)->except(['show','destroy']);
        Route::delete('coupon/{ids}', [CouponController::class,'destroy'])->name('coupon.destroy');
        Route::post('coupon/{coupon}', [CouponController::class,'copy'])->name('coupon.copy');
    });


    Route::group(['prefix' => 'export'],function(){
        Route::get('category', [CategoryController::class, 'export'])->name('category.export');
        Route::get('product/{id}/{size}', [ProductController::class, 'zipExport'])->name('product.export');
        Route::post('create-translate',[\App\Services\Translate::class,'store'])->name('translate.store');
    });
    Route::post('product-import', [ProductController::class, 'import'])->name('product.import');

});
