<script setup>
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '@/domains/authors/store';
import { sortByProperty } from '@/helpers/stateObject';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

fetchAuthors();

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>

<form @submit.prevent="handleSubmit">
  <div class="error"><ErrorMessage /></div>

  <label for="title">Title:</label>
  <input id="title" v-model="form.title" type="text" required />
  <div class="error"><FormError name="title" /></div>

  <label for="summary">Summary:</label>
  <textarea id="summary" v-model="form.summary" required></textarea>
  <div class="error"><FormError name="summary" /></div>

  <label for="author"></label>
  <select id="author" v-model="form.author_id" required>
    <option v-bind:value="null" disabled hidden>Select an author:</option>
    <option v-for="author in sortByProperty(getAllAuthors, 'last_name')" :key="author.id" :value="author.id">
      {{ author.name }}
    </option>
  </select>

  <button type="submit"><slot>submit</slot></button>
</form>
</template>

<style scoped>
.error {
  color:rgb(226, 61, 43);
}

form {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
}

label {
  margin-bottom: 6px;
}

textarea {
  padding: 15px;
  height: 180px;
}

button {
  text-align: center;
  border: 1px solid;
  width: fit-content;
  padding: 8px 12px;
  margin-top: 10px;
}
</style>