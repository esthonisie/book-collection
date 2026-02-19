<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index() {
        return ReviewResource::collection(Review::all());
    }

    public function store(StoreReviewRequest $request) {
        Review::create($request->validated());

        return ReviewResource::collection(Review::all());
    }

    public function show(Review $review) {
        return new ReviewResource($review);
    }

    public function update(UpdateReviewRequest $request, Review $review) {
        $review->update($request->validated());

        return ReviewResource::collection(Review::all());
    }

    public function destroy(Review $review) {
        $review->delete();
        return response()->json(['message' => 'Review deleted with success']);
    }
}