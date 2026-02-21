<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthorController extends Controller
{
    public function index() {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());
        return new AuthorResource($author);
    }

    public function show(Author $author) {
        return new AuthorResource($author);
    }

    public function update(UpdateAuthorRequest $request, Author $author) {
        $author->update($request->validated());
        return new AuthorResource($author);
    }

    public function destroy(Author $author) {
        if ($author->books()->exists()) {
            throw new HttpResponseException(response()->json([
                'message' => 'Sorry, an author with books in the database cannot be deleted.'
            ], 422));
        }

        $author->delete();
        return response()->json(['message' => 'Author deleted with success']);
    }
}
