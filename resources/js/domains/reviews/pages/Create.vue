<script lang=ts setup>
import Form from '../components/Form.vue';
import { userName } from '@/helpers/reviews';
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
	username: userName(),
});

const handleSubmit = async (data: Review) => {
	try {
		await createReview(data);
		router.push({name: 'books.show', params: { id: bookId }});
	} catch(error) {
		console.log('Error: ' + error);
	}
};

const btnText = "Add Review";
</script>

<template>
<div>
	<Form :review="review" @submit="handleSubmit">{{ btnText }}</Form>
</div>
</template>