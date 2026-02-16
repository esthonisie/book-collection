<?php

namespace App\Models;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'book_id',
        'body',
        'username',
    ];

     /** @use HasFactory<\Database\Factories\ReviewFactory> */
    use HasFactory;
    
    public function book() 
    {
        return $this->belongsTo(Book::class);
    }
}
