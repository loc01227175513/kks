<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\NewsController;
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('about', function () {
    return inertia('About/About');
});
Route::resource('posts', PostController::class)->except('index') ;
Route::get('news', [NewsController::class,'index'])->name('news');