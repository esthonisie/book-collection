<script lang=ts setup>
import Form from '../components/Form.vue';
import { createReview } from '../store';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { Review } from '../types';

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id as string);

const review = ref({
	body: '',
	book_id: `${bookId}`,
});

const handleSubmit = async (data: Review) => {
	try {
		await createReview(data);
		router.push({name: 'books.show', params: { id: bookId }});
	} catch(error) {
		console.log('Error: ' + error);
	}
};
</script>

<template>
	<div>
		<h2>Add a New Review</h2>
		<Form :review="review" @submit="handleSubmit"></Form>
	</div>
</template>