<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Book;
use App\Models\Review;

class BookReviewController extends Controller
{
    public function index(Book $book) {
        return ReviewResource::collection($book->reviews);
    }

    public function store(StoreReviewRequest $request) {
        $review = Review::create($request->validated());

        $book = Book::find($review->book_id);
        return ReviewResource::collection($book->reviews);
    }

    public function show(Review $review) {
        return new ReviewResource($review);
    }

    public function update(UpdateReviewRequest $request, Review $review) {
        $review->update($request->validated());

        $book = Book::find($review->book_id);
        return ReviewResource::collection($book->reviews);
    }

    public function destroy(Review $review) {
        $review->delete();
        return response()->json(['message' => 'Review deleted with success']);
    }
}