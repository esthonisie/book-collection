<script setup lang="ts">
import { getAllReviews, fetchReviews, deleteReview } from '../store';
import { isObjectEmpty, filterByProperty, checkSome } from '@/helpers/stateObject';
import { sortByIdDesc } from '@/helpers/reviews';
import { useRoute } from 'vue-router';

isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;

const route = useRoute();
const bookId = parseInt(route.params.id as string);

const isReviews = () => {
  return checkSome(getAllReviews.value, 'book_id', bookId);
}

const reviews = () => {
  const arr = filterByProperty(getAllReviews.value, 'book_id', bookId);
  return sortByIdDesc(arr, 'id');
}
</script>

<template>
<div class="main-container-reviews">
  <div class="share">
    <p v-if="isReviews()">
    <span class="arrow">&#8594; </span>Would you also like to share your thoughts about this book?<br>
  </p>
  <p v-else>
    <span class="arrow">&#8594; </span>There seem to be no reviews yet.<br>
    <span class="hide">&#8594; </span>Would you like to share your thoughts about this book?<br>
  </p>
  <p><span class="hide">&#8594; </span>Leave a review </p>
  <RouterLink :to="{ name: 'reviews.create', params: { id: `${bookId}` } }">here</RouterLink>
  </div>
  
  <ul v-for="review in reviews()">
    <li>
      <p class="info">{{ review?.username }}</p> &#x2022; 
      <p class="info">{{ review?.created_at }}</p> &#x2022; 
      <RouterLink :to="{ name: 'reviews.edit', params: { id: review?.id } }" class="edit-link">
        Edit
      </RouterLink> |
      <button @click="deleteReview(review?.id)" class="delete-link">x</button>
      <div class="review">{{ review?.body }}</div>
    </li>
  </ul>
</div>
</template>

<style scoped>
.main-container-reviews {
  margin-top: 50px;
}

ul {
  padding: 0;
}

li {
  margin-bottom: 16px;
}

p {
  display: inline;
}

a, .share, .hide, .info, .delete-link {
  font-size: var(--font-size-14);
  text-transform: uppercase;
}

a {
  color: hsl(175, 52%, 44%);
}

.share {
  margin-bottom: 35px;
}

.share .arrow {
  color: hsl(35, 20%, 65%);
}

.share .hide {
  color: var(--main-color-dark);
  visibility: hidden;
}

.info {
  color: hsl(35, 30%, 82%);
}

.edit-link {
  margin-right: 3px;
}

.delete-link {
  color: hsl(0, 70%, 64%);
  font-weight: 700;
  margin-left: 3px;
  cursor: pointer;
}

.review {
	color: hsl(60, 10%, 88%);
	font-family: Georgia, Times, 'Times New Roman', serif;
}
</style>