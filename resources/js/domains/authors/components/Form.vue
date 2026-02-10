<script setup>
import { ref } from 'vue';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
  <ErrorMessage />

  <form @submit.prevent="handleSubmit">
    <label for="first_name">First Name:</label>
    <input id="first_name" v-model="form.first_name" type="text" required />
    <FormError name="first_name" />

    <label for="last_name">Last Name:</label>
    <input id="last_name" v-model="form.last_name" type="text" required />
    <FormError name="last_name" />

    <button type="submit">Submit</button>
  </form>
</template>