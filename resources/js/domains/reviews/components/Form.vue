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
  <div class="error"><ErrorMessage /></div>

  <label for="body">Your Review:</label>
  <textarea id="body" v-model="form.body" required></textarea>
  <div class="error"><FormError name="body" /></div>

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
  padding: 20px;
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