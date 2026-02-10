<script lang=ts setup>
import Form from '../components/Form.vue';
import { createBook } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Book } from '../types';

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

