<script setup>
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '@/domains/authors/store';
import { isObjectEmpty, sortByProperty } from '@/helpers/stateObject';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

isObjectEmpty(getAllAuthors.value) ? fetchAuthors() : null;

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>

<form @submit.prevent="handleSubmit">
  <div class="error"><ErrorMessage  />&#160;</div>

  <label for="title">Title:</label>
  <input id="title" v-model="form.title" type="text" required />
  <div class="error"><FormError name="title" />&#160;</div>

  <label for="summary">Summary:</label>
  <textarea id="summary" v-model="form.summary" required></textarea>
  <div class="error"><FormError name="summary" />&#160;</div>

  <label for="author">Select an author:</label>
  <select id="author" v-model="form.author_id" required>
    <option v-bind:value="null" disabled hidden>your choice...</option>
    <option v-for="author in sortByProperty(getAllAuthors, 'last_name')" :key="author.id" :value="author.id">
      {{ author.name }}
    </option>
  </select>

  <button type="submit"><slot>submit</slot></button>
</form>
</template>