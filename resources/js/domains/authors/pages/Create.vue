<script lang=ts setup>
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Author } from '../types';

const router = useRouter();

const author = ref({
	first_name: '',
	last_name: ''
});

const handleSubmit = async (data: Author) => {
	await createAuthor(data);
	router.push({name: 'authors.overview'});
};
</script>

<template>
	<div>
		<h2>Add a New Author</h2>
		<Form :author="author" @submit="handleSubmit"></Form>
	</div>
</template>

