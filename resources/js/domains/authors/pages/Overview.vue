<script setup lang="ts">
import { ref } from 'vue';
import BookList from '../components/BookList.vue';
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
import { fetchBooks, getAllBooks } from '@/domains/books/store';
import { isObjectEmpty, sortByProperty } from '@/helpers/stateObject';
import type { Author } from '@/domains/authors/types';
// import ErrorMessage from '@/services/error/ErrorMessage.vue';

isObjectEmpty(getAllAuthors.value) ? fetchAuthors() : null;
isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;

const authors = (): Author[] => {
	return sortByProperty(getAllAuthors.value, 'last_name') as Author[];
}

const capturedInfo = ref({
	id: 0,
	name: ""
});

const grabInfo = (authorId: number, authorName: string) => {
	capturedInfo.value.id = authorId;
	capturedInfo.value.name = authorName;
}

const submitDelete = async (authorId: number) => {
	try {
		await deleteAuthor(authorId);
	} catch(error) {
		console.log('Error: ' + error);
	}
}
</script>

<template>
<!-- <ErrorMessage /> -->
<div class="main-container">

	<div class="main-left-container">
		<ul v-for="author in authors()" :key="author.id">
			<li>

				<template v-if="author.books_count === 0">
				<p>
					{{ author.name }} 
					<span class="book red">&#40;no books&#41;</span>
				</p> <span class="divider">&#x2022;</span>
				<RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }" class="edit">
					Edit
				</RouterLink><span class="divider">|</span>
				<button @click="submitDelete(author.id)" class="delete">x</button>
				</template>

				<template v-else>
				<button @click="grabInfo(author.id, author.name)">
					{{ author.name }} 
					<span v-if="author.books_count === 1" class="book">&#40;1 book&#41;</span>
					<span v-else class="book">&#40;{{ author.books_count }} books&#41;</span>
				</button> <span class="divider">&#x2022;</span>
				<RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }" class="edit">
					Edit
				</RouterLink>
				</template>

			</li>
		</ul>
	</div>

	<div class="main-right-container">
		<BookList :author="capturedInfo"/> 
	</div>

</div>
</template>

<style scoped>
.main-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
}

.main-left-container {
  padding-right: 20px;
}

.main-right-container {
  padding-left: 20px;
}

ul {
	color: hsl(55, 10%, 85%);
	padding: 0;
}

p {
  display: inline;
}

li {
	position: relative;
	margin-bottom: 2px;
}

li:hover {
	color: hsl(55, 30%, 98%);
}

li:hover::before {
	content: "\2192";
  margin-left: -18px;
	color: hsl(35, 50%, 65%);
	font-weight: 700;
	position: absolute;
}

.book {
	margin-left: 3px;
	color: hsl(35, 30%, 82%);
}

.delete, .edit, .book {
	font-size: var(--font-size-14);
  text-transform: uppercase;
}

.edit {
	color: hsl(175, 52%, 44%);
	margin-right: 3px;
}

.delete {
	color: hsl(0, 70%, 64%);
	font-weight: 700;
	margin-left: 7px;
}

.divider {
	color: hsl(35, 30%, 82%);
}

.red {
	color: hsl(0, 85%, 68%);
}
</style>