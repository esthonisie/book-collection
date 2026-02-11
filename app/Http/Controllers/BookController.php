<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;

class BookController extends Controller
{
    public function index() {
        return BookResource::collection(Book::all());
    }

    public function store(StoreBookRequest $request) {
        Book::create($request->validated());

        return BookResource::collection(Book::all());
    }

    public function show(Book $book)
    {
        return new BookResource($book);
    }

    public function update(UpdateBookRequest $request, Book $book) {
        $book->update($request->validated());

        return BookResource::collection(Book::all());
    }

    public function destroy(Book $book) {
        $book->delete();
        return response()->json(['message' => 'Book deleted with success']);
    }
}
