<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\CategoryController;




//Route::get('/{page?}',[MainController::class,'admin'])->where('page','^api.*$');
Route::get('/{page?}',[MainController::class,'admin'])->where('page','^(?!api).*$');



