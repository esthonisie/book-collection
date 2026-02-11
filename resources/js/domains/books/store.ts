import { storeModuleFactory } from '@/services/store';
import type { Book } from './types';

const bookStore = storeModuleFactory('books');

// actions
export const fetchBooks = async () => {
	await bookStore.actions.getAll();
};

export const fetchBook = async (id: number) => {
	await bookStore.actions.getById(id);
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