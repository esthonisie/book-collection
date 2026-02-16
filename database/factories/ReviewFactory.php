<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Book;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'body' => fake()->text(250),
            'book_id' => Book::factory(),
            'username' => fake()->randomElement(['Captain Flint', 'Long John Silver', 
                'Hornblower', 'Mr. Darcy', 'Elizabeth Bennet', 'Herman Toothrot', 
                'Mr. Rochester', 'Jane Eyre','Elaine Marley', 'Guybrush Threepwood', 
                'Fester Shinetop', 'the Dude', 'the Queen']),
            'created_at' => fake()->unique()->dateTimeThisYear()->format('Y-m-d H:i:s'),
        ];
    }
}
