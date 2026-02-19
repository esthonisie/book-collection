<script setup lang="ts">
import { fetchBooks, getBookById, getAllBooks } from '../store';
import { getAllReviews, fetchReviews, deleteReview } from '@/domains/reviews/store';
import { isObjectEmpty, filterByProperty } from '@/helpers/stateObject';
import { sortByIdDesc } from '@/helpers/reviews';
import { useRoute } from 'vue-router';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;
isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);

const sortReviews = (reviewsObj, propBookId, bookId, propId) => {
  const arr = filterByProperty(reviewsObj, propBookId, bookId);
  return sortByIdDesc(arr, propId);
}
</script>

<template>
<p><strong>Title:</strong></p>
<p>{{ book?.title }}</p>
<p><strong>Author:</strong></p>
<p>{{ book?.author }}</p>
<p><strong>First published in: </strong>2042</p>
<p><strong>Genres: </strong>fiction, thriller</p>
<p><strong>Summary:</strong></p>
<p>{{ book?.summary }}</p>
<RouterLink :to="{ name: 'reviews.create' }">Add New Review</RouterLink>
<p><strong>Reviews:</strong></p>
<ul v-for="review in sortReviews(getAllReviews, 'book_id', bookId, 'id')">
  <li>
    <div>{{ review?.username }} - {{ review?.created_at }}</div>
    <div>{{ review?.body }}</div>
    <RouterLink :to="{ name: 'reviews.edit', params: { id: review?.id } }">Edit</RouterLink> |
    <button @click="deleteReview(review?.id)">Delete</button>
  </li>
</ul>
</template>