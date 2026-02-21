<script setup lang="ts">
import { getAllReviews, fetchReviews, deleteReview } from '../store';
import { isObjectEmpty, filterByProperty } from '@/helpers/stateObject';
import { sortByIdDesc } from '@/helpers/reviews';
import { useRoute } from 'vue-router';

isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;

const route = useRoute();
const bookId = parseInt(route.params.id as string);

const reviews = () => {
  const arr = filterByProperty(getAllReviews.value, 'book_id', bookId);
  return sortByIdDesc(arr, 'id');
}
</script>

<template>
<RouterLink :to="{ name: 'reviews.create' }">Add New Review</RouterLink>
<p><strong>Reviews:</strong></p>
<ul v-for="review in reviews()">
  <li>
    <div>{{ review?.username }} - {{ review?.created_at }}</div>
    <div>{{ review?.body }}</div>
    <RouterLink :to="{ name: 'reviews.edit', params: { id: review?.id } }">Edit</RouterLink> |
    <button @click="deleteReview(review?.id)">Delete</button>
  </li>
</ul>
</template>