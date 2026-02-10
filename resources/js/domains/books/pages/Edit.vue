<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBook, getBookById, updateBook } from '../store';
import type { Book } from '../types';

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);

fetchBook(bookId);

const handleSubmit = async (data: Book) => {
	try {
		await updateBook(bookId, data);
    router.push({ name: 'books.overview' });
	} catch(error) {
		console.log('Error: ' + error);
	}
};
</script>

<template>
  <div>
    <h2>Edit Book</h2>
    <Form v-if="book" :book="book" @submit="handleSubmit"></Form>
  </div>
</template>