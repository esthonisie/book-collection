<script setup lang="ts">
import { filterByProperty } from '@/helpers/stateObject';
import { getAllBooks } from '@/domains/books/store';
import type { Author } from '@/domains/authors/types';
import type { Book } from '@/domains/books/types';

const props = defineProps<{ author: Author }>();

const books = (): Book[] => {
	return filterByProperty(getAllBooks.value, 'author_id', props.author.id) as Book[];
}
</script>

<template>
<p v-if="props.author.id === 0" class="intro right">&#8594; Select an author to view the book title(s)</p>
<p class="author right">{{ props.author.name }}</p>
<ul v-for="book in books()" :key="book.id">	
  <li class="right">
    <RouterLink :to="{ name: 'books.show', params: { id: book.id } }">
      {{ book.title }}
    </RouterLink>
  </li>
</ul>
</template>

<style scoped>
a {
  position: relative;
	color: hsl(175, 52%, 48%);
	margin-bottom: 2px;
}

a:hover {
  color: hsl(175, 48%, 64%);
}

a:hover::after {
	content: "\2190";
  margin-left: 6px;
  margin-top: -2px;
	color: hsl(35, 50%, 65%);
	font-weight: 700;
	position: absolute;
}

.intro {
  color: hsl(60, 10%, 88%);
}

.author {
  color: hsl(55, 10%, 85%);
  margin-bottom: 12px;
}

.intro, .author {
  font-size: var(--font-size-14);
  text-transform: uppercase;
}

.right {
  text-align: right;
}
</style>