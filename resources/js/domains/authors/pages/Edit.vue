<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { getAuthorById, updateAuthor } from '../store';
import type { Author } from '../types';

const router = useRouter();

const route = useRoute();
const authorId = parseInt(route.params.id as string);
const author = getAuthorById(authorId);

const handleSubmit = async (data: Author) => {
  await updateAuthor(authorId, data);
  router.push({ name: 'authors.overview' });
};
</script>

<template>
  <div>
    <h2>Edit Author</h2>
    <Form v-if="author" :author="author" @submit="handleSubmit"></Form>
  </div>
</template>