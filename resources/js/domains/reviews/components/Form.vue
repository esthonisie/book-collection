<script setup>
import { ref } from 'vue';

const props = defineProps({ review: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.review });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Your Review:</label>
    <textarea v-model="form.body" required></textarea>
    <button type="submit">Submit</button>
  </form>
</template>