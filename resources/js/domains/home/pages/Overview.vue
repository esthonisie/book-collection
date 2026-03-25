<script setup lang="ts">
import { getAllBooks, fetchBooks } from '@/domains/books/store';
import { getAllReviews, fetchReviews } from '@/domains/reviews/store';
import { getAllAuthors, fetchAuthors } from '@/domains/authors/store';
import { isObjectEmpty } from '@/helpers/stateObject';

// pre-loader
// TODO: vraag: wat is de toegevoegde waarde van de isObjectEmpty functie, als je altijd alle data inlaadt zoals hier onder gebeurt?
isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;
isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;
isObjectEmpty(getAllAuthors.value) ? fetchAuthors() : null;
</script>

<template>
<div class="main-container">
  <p>Welcome!</p> 
</div>
</template>

<style scoped>
.main-container {
  color: hsl(35, 50%, 65%);
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1.75rem;
}
</style>