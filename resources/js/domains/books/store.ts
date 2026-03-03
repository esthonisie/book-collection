import { storeModuleFactory } from '@/services/store';
import type { Book } from './types';
import type { New, Updatable } from '@/services/store/types';

const bookStore = storeModuleFactory<Book>('books');

// actions
export const fetchBooks = async () => {
	await bookStore.actions.getAll();
};

export const createBook = async (newBook: New<Book>) => {
	await bookStore.actions.create(newBook);
};

export const updateBook = async (id: number, updatedBook: Updatable<Book>) => {
	await bookStore.actions.update(id, updatedBook);
};

export const deleteBook = async (id: number) => {
	await bookStore.actions.delete(id);
};

// getters
export const getAllBooks = bookStore.getters.all;
export const getBookById = bookStore.getters.getById;