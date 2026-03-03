<script lang=ts setup>
import Form from '../components/Form.vue';
import { updateBooksCount } from '@/helpers/authors';
import { createBook } from '../store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Book } from '../types';
import type { New } from '@/services/store/types';

const router = useRouter();

const book = ref({
	title: '',
	summary: '',
	author_id: NaN
});

const handleSubmit = async (data: New<Book>) => {
	try {
		await createBook(data);
		updateBooksCount(data.author_id);
		router.push({name: 'books.overview'});
	} catch(error) {
		console.log('Error: ' + error);
	}
};

const btnText = "Add Book";
</script>

<template>
<div>
	<Form :book="book" @submit="handleSubmit">{{ btnText }}</Form>
</div>
</template>

