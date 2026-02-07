<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import type { Book } from '../types';

fetchBooks();

const router = useRouter();

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);

const handleSubmit = async (data: Book) => {
  await updateBook(bookId, data);
  router.push({ name: 'books.overview' });
};
</script>

<template>
  <div>
    <h2>Edit Book</h2>
    <Form v-if="book" :book="book" @submit="handleSubmit"></Form>
  </div>
</template>