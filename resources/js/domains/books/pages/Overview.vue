<script setup lang="ts">
import { fetchBooks, getAllBooks, deleteBook } from '../store';
import { getAllReviews, fetchReviews } from '@/domains/reviews/store';
import { isObjectEmpty, sortByProperty } from '@/helpers/stateObject';
import { shortenSummary } from '@/helpers/books';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;
// pre-load reviews
isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;
</script>

<template>
<div class="main-container">
	<div class="book-container" v-for="book in sortByProperty(getAllBooks, 'title')" :key="book.id">
		<div>
			<div class="title">{{ book.title }}</div>
			<div class="written-by">written by:</div>
			<div class="author">{{ book.author }}</div>
			<hr>
			<div class="summary">{{ shortenSummary(book.summary) }}</div>
			<RouterLink :to="{ name: 'books.show', params: { id: book.id } }">
				&#8594; info &#38; reviews
			</RouterLink>
		</div>
		<RouterLink :to="{ name: 'books.edit', params: { id: book.id } }" class="edit-link">Edit</RouterLink>
		<div @click="deleteBook(book.id)" class="delete-link">x</div>
	</div>
</div>
</template>

<style scoped>
.main-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 100%;
	gap: 14px;
}
.book-container {
	position: relative;
	display: flex;
	justify-content: space-between;
	background-color: white;
	border: 1px solid black;
	min-height: fit-content;
	padding: 20px;
}

.delete-link {
	position: absolute;
	top: -6px;
	right: 4px;
	cursor: pointer;
}

.edit-link {
	position: absolute;
	top: -2px;
	left: 4px;
}

/* .title {

}

.written-by {

}

.author {
 
}

a {
  
} */
</style>