import { storeModuleFactory } from '../../services/store';
import type { Book } from './types';

// state
const bookStore = storeModuleFactory('books');

// actions
export const fetchBooks = async () => {
	await bookStore.actions.getAll();
};

export const createBook = async (newBook: Book) => {
	await bookStore.actions.create(newBook);
}

export const updateBook = async (id: number, updatedBook: Book) => {
	await bookStore.actions.update(id, updatedBook);
}

export const deleteBook = async (id: number) => {
	await bookStore.actions.delete(id);
}

// getters
export const getAllBooks = bookStore.getters.all;
export const getBookById = bookStore.getters.getById;

// ------------- OLD --------------------------------------
/* 
// state
const books = ref<Book[]>([]);

// actions
export const fetchBooks = async () => {
	const {data} = await getRequest('/books');
	if(!data) return
	books.value = data;
};

export const createBook = async (newBook: Book) => {
	const {data} = await postRequest('/books', newBook);
	if(!data) return
	books.value = data;
};

export const updateBook = async (id: number, updatedBook: Book) => {
	const { data } = await putRequest(`/books/${id}`, updatedBook);
	if (!data) return;
	books.value = data;
};

export const deleteBook = async (id: number) => {
	await deleteRequest(`/books/${id}`);
	books.value = books.value.filter(book => book.id !== id);
};

// getters
export const getAllBooks = computed<Book[]>(() => books.value);
export const getBookById = (id: number) => computed(() => books.value.find(book => book.id === id));
 */