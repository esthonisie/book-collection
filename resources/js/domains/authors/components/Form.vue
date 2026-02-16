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

<form @submit.prevent="handleSubmit">
  <div class="error"><ErrorMessage /></div>

  <label for="first_name">First Name:</label>
  <input id="first_name" v-model="form.first_name" type="text" required />
  <div class="error"><FormError name="first_name" /></div>

  <label for="last_name">Last Name:</label>
  <input id="last_name" v-model="form.last_name" type="text" required />
  <div class="error"><FormError name="last_name" /></div>

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