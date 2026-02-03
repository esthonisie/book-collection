import axios from 'axios';
import { ref, computed } from 'vue';
import type { Book } from './types';

// state
const books = ref([]);

// actions
export const fetchBooks = async () => {
	const {data} = await axios.get('/api/books');
	if(!data) return
	books.value = data;
};

export const createBook = async (newBook: Book) => {
	const {data} = await axios.post('/api/books', newBook);
	if(!data) return
	books.value = data;
};

// getters
export const getAllBooks = computed<Book[]>(() => books.value);