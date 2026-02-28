<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook, getAllBooks } from '../store';
import { isObjectEmpty } from '@/helpers/stateObject';
import { updateBooksCount } from '@/helpers/authors';
import type { Book } from '../types';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);

const handleSubmit = async (data: Book) => {
	try {
		const oldAuthorId = book.value.author_id;
		const newAuthorId = data.author_id;

		if (oldAuthorId !== newAuthorId) {
			await updateBook(bookId, data);
			updateBooksCount(oldAuthorId);
			updateBooksCount(newAuthorId);
		} else {
			await updateBook(bookId, data);
		}
		
    router.push({ name: 'books.overview' });
	} catch(error) {
		console.log('Error: ' + error);
	}
};

const btnText = "Edit Book";
</script>

<template>
<div>
  <Form v-if="book" :book="book" @submit="handleSubmit">{{ btnText }}</Form>
</div>
</template>