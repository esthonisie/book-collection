import axios from 'axios';
import { ref, computed } from 'vue';
import type { Book } from './types';

// state
const books = ref<Book[]>([]);

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

export const updateBook = async (id: number, updatedBook: Book) => {
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

// getters
export const getAllBooks = computed<Book[]>(() => books.value);
export const getBookById = (id: number) => computed(() => books.value.find(book => book.id == id));