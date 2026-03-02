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
<form @submit.prevent="handleSubmit">
  <div class="error"><ErrorMessage  />&#160;</div>

  <label for="body">Your Review:</label>
  <textarea id="body" v-model="form.body" required></textarea>
  <div class="error"><FormError name="body" />&#160;</div>

  <button type="submit"><slot>submit</slot></button>
</form>
</template>