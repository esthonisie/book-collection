<script setup lang="ts">
import { fetchBooks, getBookById } from '../store';
import { useRoute } from 'vue-router';

fetchBooks();

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);
</script>

<template>
<p><strong>Title:</strong></p>
<p>{{ book.title }}</p>
<p><strong>Author:</strong></p>
<p>{{ book.author.name }}</p>
<p><strong>Summary:</strong></p>
<p>{{ book.summary }}</p>
<!-- <p><strong>Reviews:</strong></p> -->
</template>