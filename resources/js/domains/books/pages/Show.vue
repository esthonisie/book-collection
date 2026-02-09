<script setup lang="ts">
import { fetchBook, getBookById } from '../store';
import { getAllReviews, fetchBookReviews, deleteReview } from '@/domains/reviews/store';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);

fetchBook(bookId);
fetchBookReviews('books', bookId);
</script>

<template>
<p><strong>Title:</strong></p>
<p>{{ book?.title }}</p>
<p><strong>Author:</strong></p>
<p>{{ book?.author.name }}</p>
<p><strong>Summary:</strong></p>
<p>{{ book?.summary }}</p>
<RouterLink :to="{ name: 'reviews.create' }">Add New Review</RouterLink>
<p><strong>Reviews:</strong></p>
<ul v-for="review in getAllReviews">
  <li>
    <div>{{ review?.body }}</div>
    <RouterLink :to="{ name: 'reviews.edit', params: { id: review?.id } }">Edit</RouterLink>
    <button @click="deleteReview(review?.id)">Delete</button>
  </li>
</ul>
</template>