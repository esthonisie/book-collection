<script setup lang="ts">
import { ref } from 'vue';
import type { Author } from '../types';
import type { New } from '@/services/store/types';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

const props = defineProps<{ author: New<Author> }>();

const emit = defineEmits<{
    (event: 'submit', data: New<Author>): void;
}>();

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>

<form @submit.prevent="handleSubmit">
  <div class="error"><ErrorMessage  />&#160;</div>

  <label for="first_name">First Name:</label>
  <input id="first_name" v-model="form.first_name" type="text" required />
  <div class="error"><FormError name="first_name" />&#160;</div>

  <label for="last_name">Last Name:</label>
  <input id="last_name" v-model="form.last_name" type="text" required />
  <div class="error"><FormError name="last_name" />&#160;</div>

  <button type="submit"><slot>submit</slot></button>
</form>
</template>