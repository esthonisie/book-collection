<script lang=ts setup>
import Form from '../components/Form.vue';
import { createBook } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { destroyMessage, destroyErrors } from '@/services/error';
import type { Book } from '../types';

// reset general error message and errorbag message
destroyMessage();
destroyErrors();

const router = useRouter();

const book = ref({
	title: '',
	summary: '',
	author_id: null
});

const handleSubmit = async (data: Book) => {
	try {
		await createBook(data);
		router.push({name: 'books.overview'});
	} catch(error) {
		console.log('Error: ' + error);
	}
};
</script>

<template>
	<div>
		<h2>Add a New Book</h2>
		<Form :book="book" @submit="handleSubmit"></Form>
	</div>
</template>

