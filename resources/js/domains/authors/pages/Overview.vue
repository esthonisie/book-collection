<script setup lang="ts">
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
import { fetchBooks, getAllBooks } from '@/domains/books/store';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import { isObjectEmpty, sortByProperty, filterByProperty } from '@/helpers/stateObject';

isObjectEmpty(getAllAuthors.value) ? fetchAuthors() : null;
isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;

const submitDelete = async (authorId: number) => {
	try {
		await deleteAuthor(authorId);
	} catch(error) {
		console.log('Error: ' + error);
	}
}
</script>

<template>
<ErrorMessage />
<ul v-for="author in sortByProperty(getAllAuthors, 'last_name')" :key="author.id">
	<li>
		<div>
			{{ author.name }}
			<RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Edit</RouterLink> |
			<button @click="submitDelete(author.id)">Delete</button>
		</div>
		<ul v-for="book in filterByProperty(getAllBooks, 'author_id', author.id)" :key="book.id">
			<li><RouterLink :to="{ name: 'books.show', params: { id: book.id } }">{{ book.title }}</RouterLink></li>
		</ul>
	</li>
</ul>
</template>