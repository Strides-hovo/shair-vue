<?php

use Illuminate\Support\Facades\Route;
use App\Services\Menus;

Route::get('menus', [Menus::class,'builder'])->name('menus');