<script setup>
import { fetchBooks } from '../store';
import { getAllBooks } from '../store';
import { deleteBook } from '../store';

fetchBooks();
</script>

<template>
	<table>
		<thead>
			<tr>
				<th>Title</th>
				<th>Summary</th>
				<th></th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="book in getAllBooks" :key="book.id">
				<td>{{ book.title }}</td>
				<td>{{ book.summary }}</td>
				<td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Edit</RouterLink></td>
				<td><button @click="deleteBook(book.id)">Delete</button></td>
			</tr>
		</tbody>
	</table>
</template>