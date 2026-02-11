<?php

namespace App\Models;

use App\Models\Author;
use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'author_id',
        'title',
        'summary',
    ];

     /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    public function author() 
    {
        return $this->belongsTo(Author::class);
    }

    public function reviews() 
    {
        return $this->hasMany(Review::class);
    }
}
