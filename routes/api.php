<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookReviewController;

// Books
Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{book}', [BookController::class, 'show']);
Route::post('/books', [BookController::class, 'store']);
Route::put('/books/{book}', [BookController::class, 'update']);
Route::delete('/books/{book}', [BookController::class, 'destroy']);

// Book --> Reviews
Route::get('/books/{book}/reviews', [BookReviewController::class, 'index']);
Route::get('/reviews/{review}', [BookReviewController::class, 'show']);
Route::post('/reviews', [BookReviewController::class, 'store']);
Route::put('/reviews/{review}', [BookReviewController::class, 'update']);
Route::delete('/reviews/{review}', [BookReviewController::class, 'destroy']);

// Authors
Route::get('/authors', [AuthorController::class, 'index']);
Route::get('/authors/{author}', [AuthorController::class, 'show']);
Route::post('/authors', [AuthorController::class, 'store']);
Route::put('/authors/{author}', [AuthorController::class, 'update']);
Route::delete('/authors/{author}', [AuthorController::class, 'destroy']);