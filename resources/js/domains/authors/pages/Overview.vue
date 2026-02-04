<script setup>
import { fetchAuthors } from '../store';
import { getAllAuthors } from '../store';
import { deleteAuthor } from '../store';

fetchAuthors();
</script>

<template>
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
				<td><button @click="deleteAuthor(author.id)">Delete</button></td>
			</tr>
		</tbody>
	</table>
</template>