<script setup lang="ts">
import { fetchBooks, getAllBooks, deleteBook } from '../store';
import { getAllReviews, fetchReviews } from '@/domains/reviews/store';
import { isObjectEmpty, sortByProperty } from '@/helpers/stateObject';
import { shortenSummary } from '@/helpers/books';
import { updateBooksCount } from '@/helpers/authors';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;
// pre-load reviews
isObjectEmpty(getAllReviews.value) ? fetchReviews() : null;
</script>

<template>
<div class="main-container">
	<div 
		class="book-container" 
		v-for="book in sortByProperty(getAllBooks, 'title')" 
		:key="book.id"
	>
		<div>
			<p class="title">{{ book.title }}</p>
			<p class="written-by">written by:</p>
			<p class="author">{{ book.author }}</p>
			<hr>
			<p class="summary">{{ shortenSummary(book.summary) }}</p>
			<RouterLink :to="{ name: 'books.show', params: { id: book.id } }">
				&#8594; info &#38; reviews
			</RouterLink>
		</div>
		<RouterLink :to="{ name: 'books.edit', params: { id: book.id } }" class="edit-link">
			Edit
		</RouterLink>
		<p @click="deleteBook(book.id); updateBooksCount(book.author_id)" class="delete-link">x</p>
	</div>
</div>
</template>

<style scoped>
.main-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	gap: 14px;
}

.book-container {
	position: relative;
	display: flex;
	justify-content: space-between;
	border: 1px solid hsl(55, 10%, 65%);
	min-height: fit-content;
	padding: 30px 20px 24px;
}

.delete-link {
	position: absolute;
	top: 0;
	right: 4px;
	color: hsl(0, 70%, 64%);
  font-size: var(--font-size-14);
  text-transform: uppercase;
  font-weight: 700;
	cursor: pointer;
}

.edit-link {
	position: absolute;
	top: 0;
	left: 4px;
}

.title {
	color: hsl(35, 50%, 65%);
  font-size: var(--font-size-18);
	line-height: 1.5rem;
  font-weight: 700;
}

.written-by {
	color: hsl(55, 10%, 82%);
  font-size: var(--font-size-14);
}

.author {
	color: hsl(55, 10%, 94%);
}

hr {
	color: hsl(35, 20%, 60%);
	margin: 4px 0 8px;
}

.summary {
	color: hsl(60, 10%, 88%);
	font-family: Georgia, Times, 'Times New Roman', serif;
	margin-bottom: 4px;
}

a {
  color: hsl(175, 52%, 44%);
  font-size: var(--font-size-14);
  text-transform: uppercase;
}

@media only screen and (max-width: 920px) {
	.main-container {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>