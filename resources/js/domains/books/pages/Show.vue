<script setup lang="ts">
import { fetchBooks, getBookById, getAllBooks } from '../store';
import { cicero } from '../components/dummy-text';
import { isObjectEmpty } from '@/helpers/stateObject';
import { useRoute } from 'vue-router';
// reviews
import Overview from '@/domains/reviews/pages/Overview.vue';

isObjectEmpty(getAllBooks.value) ? fetchBooks() : null;

const route = useRoute();
const bookId = parseInt(route.params.id as string);
const book = getBookById(bookId);
</script>

<template>
<div class="main-container">
  <div class="main-left-container">
    <p class="summary">{{ book?.summary }}</p>
    <figure class="quote">
      <blockquote>
        {{ cicero }}
      </blockquote>
      <figcaption>
        &mdash; Some Body, <cite>the Book Club</cite> 
      </figcaption>
    </figure>
  </div>
  <div class="main-right-container">
    <p class="title">{{ book?.title }}</p>
    <p class="author">{{ book?.author }}</p>
    <hr>
    <p>First published in: <span class="info">2042</span></p>
    <p>Genres: <span class="info">thriller, suspense horror, historical fiction</span></p>
    <p>Pages: <span class="info">789</span></p>
    <!-- reviews -->
    <Overview />
  </div>
</div>
</template>

<style scoped>
.main-container {
  color: hsl(60, 10%, 88%);
  display: grid;
  grid-template-columns: 2fr 4fr;
  width: 100%;
}

/* -------------------------------------------------------- */
.main-left-container {
  padding-right: 20px;
}

.summary {
  font-size: var(--font-size-18);
	font-family: Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 40px;
}

.quote {
  color: hsl(35, 30%, 85%);
  font-family: Georgia, Times, 'Times New Roman', serif;
  border-left: 1px solid hsl(35, 30%, 85%);
  padding: 0 20px;
}

.quote figcaption {
  margin-top: 12px;
}
/* -------------------------------------------------------- */
.main-right-container {
  padding-left: 20px;
  margin-left: 68px;
}

.title {
	color: hsl(35, 50%, 65%);
  font-size: var(--font-size-32);
  font-weight: 700;
  line-height: 1.2;
  margin-top: -4px;
  margin-bottom: 8px;
}

.author {
  color: hsl(55, 10%, 100%);
  font-size: var(--font-size-20);
  text-transform: uppercase;
  margin-bottom: 22px;
}

.info {
  color: hsl(35, 30%, 82%);
  font-size: var(--font-size-14);
  text-transform: uppercase;
}

hr {
	color: hsl(35, 20%, 80%);
  width: 10.25rem;
	margin-bottom: 2px;
}
</style>