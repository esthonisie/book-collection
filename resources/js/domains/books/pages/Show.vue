<script setup lang="ts">
import { fetchBooks, getBookById, getAllBooks } from '../store';
import { isObjectEmpty } from '@/helpers/stateObject';
import { useRoute } from 'vue-router';
// reviews
import Overview from '@/domains/reviews/pages/Overview.vue';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);
</script>

<template>
<p><strong>Title:</strong></p>
<p>{{ book?.title }}</p>
<p><strong>Author:</strong></p>
<p>{{ book?.author }}</p>
<p><strong>First published in: </strong>2042</p>
<p><strong>Genres: </strong>fiction, thriller</p>
<p><strong>Summary:</strong></p>
<p>{{ book?.summary }}</p>
<!-- reviews -->
<Overview />
</template>