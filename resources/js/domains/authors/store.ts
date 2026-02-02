import axios from 'axios';
import { ref, computed } from 'vue';
import type { Author } from './types';

// state
const authors = ref([]);

// actions
export const fetchAuthors = async () => {
	const {data} = await axios.get('/api/authors');
	if(!data) return
	authors.value = data;
};

// getters
export const getAllAuthors = computed<Author[]>(() => authors.value);