<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchReview, getReviewById, updateReview } from '../store';
import type { Review } from '../types';

const router = useRouter();

const route = useRoute();
const reviewId = parseInt(route.params.id as string);
const review = getReviewById(reviewId);

fetchReview(reviewId);

const handleSubmit = async (data: Review) => {
  await updateReview(reviewId, data);
  router.back();
};
</script>

<template>
  <div>
    <h2>Edit Review</h2>
    <Form v-if="review" :review="review" @submit="handleSubmit"></Form>
  </div>
</template>