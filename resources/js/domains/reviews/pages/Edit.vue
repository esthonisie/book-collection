<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchReviews, getReviewById, updateReview, getAllReviews } from '../store';
import { isObjectEmpty } from '@/helpers/stateObject';
import type { Review } from '../types';

isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;

const router = useRouter();

const route = useRoute();
const reviewId = parseInt(route.params.id as string);
const review = getReviewById(reviewId);

const handleSubmit = async (data: Review) => {
	try {
		await updateReview(reviewId, data);
    router.push({name: 'books.show', params: { id: review.value.book_id }});
	} catch(error) {
		console.log('Error: ' + error);
	}
};

const btnText = "Edit Review";
</script>

<template>
<div>
  <Form v-if="review" :review="review" @submit="handleSubmit">{{ btnText }}</Form>
</div>
</template>