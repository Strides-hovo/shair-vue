<?php

use Illuminate\Support\Facades\Route;
use App\Services\Menus;


Route::get('menus', [Menus::class,'menu'])->name('menus');

