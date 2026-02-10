<script setup lang="ts">
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store';
import ErrorMessage from '@/services/error/ErrorMessage.vue';

const submitDelete = async (authorId: number) => {
	try {
		await deleteAuthor(authorId);
	} catch(e) {

	}
}

fetchAuthors();
</script>

<template>
	<ErrorMessage />
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="author in getAllAuthors" :key="author.id">
				<td>{{ author.name }}</td>
				<td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Edit</RouterLink></td>
				<td><button @click="submitDelete(author.id)">Delete</button></td>
			</tr>
		</tbody>
	</table>
</template>