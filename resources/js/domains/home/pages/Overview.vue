<script setup lang="ts">
import { getAllBooks, fetchBooks } from '@/domains/books/store';
import { getAllReviews, fetchReviews } from '@/domains/reviews/store';
import { getAllAuthors, fetchAuthors } from '@/domains/authors/store';
import { isObjectEmpty } from '@/helpers/stateObject';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;
// pre-load reviews and authors
isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;
isObjectEmpty(getAllAuthors.value) ? fetchAuthors() : null;
</script>

<template>
<p>Discover This Book:</p> 
<button>random book button</button>
</template>