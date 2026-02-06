<script setup>
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '@/domains/authors/store';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

fetchAuthors();

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
  <ErrorMessage />

  <form @submit.prevent="handleSubmit">
    <label for="title">Title:</label>
    <input id="title" v-model="form.title" type="text" required />
    <FormError name="title" />

    <label for="summary">Summary:</label>
    <textarea id="summary" v-model="form.summary" required></textarea>
    <FormError name="summary" />

    <label>Author:</label>
    <select v-model="form.author_id" required>
      <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
        {{ author.name }}
      </option>
    </select>

    <button type="submit">Submit</button>
  </form>
</template>