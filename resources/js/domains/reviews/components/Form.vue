<script setup>
import { ref } from 'vue';
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import FormError from '@/services/error/FormError.vue';

const props = defineProps({ review: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.review });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
  <ErrorMessage />

  <form @submit.prevent="handleSubmit">
    <label for="body">Your Review:</label>
    <textarea id="body" v-model="form.body" required></textarea>
    <FormError name="body" />

    <button type="submit">Submit</button>
  </form>
</template>