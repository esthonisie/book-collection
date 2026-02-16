<script lang=ts setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchAuthor, getAuthorById, updateAuthor } from '../store';
import type { Author } from '../types';

const router = useRouter();

const route = useRoute();
const authorId = parseInt(route.params.id as string);
const author = getAuthorById(authorId);

fetchAuthor(authorId);

const handleSubmit = async (data: Author) => {
	try {
		await updateAuthor(authorId, data);
    router.push({ name: 'authors.overview' });
	} catch(error) {
		console.log('Error: ' + error);
	}
};

const btnText = "Edit Author";
</script>

<template>
<div>
  <Form v-if="author" :author="author" @submit="handleSubmit">{{ btnText }}</Form>
</div>
</template>