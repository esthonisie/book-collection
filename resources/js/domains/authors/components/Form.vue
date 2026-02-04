<script setup>
import { ref } from 'vue';

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>First Name:</label>
    <input v-model="form.first_name" type="text" required />

    <label>Last Name:</label>
    <input v-model="form.last_name" type="text" required />

    <button type="submit">Submit</button>
  </form>
</template>