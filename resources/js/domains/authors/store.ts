import { storeModuleFactory } from '@/services/store';
import type { Author } from './types';

const authorStore = storeModuleFactory('authors');

// actions
export const fetchAuthors = async () => {
	await authorStore.actions.getAll();
};

export const fetchAuthor = async (id: number) => {
	await authorStore.actions.getById(id);
};

export const createAuthor = async (newAuthor: Author) => {
	await authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
	await authorStore.actions.update(id, updatedAuthor);
};

export const deleteAuthor = async (id: number) => {
	await authorStore.actions.delete(id);
};

// getters
export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = authorStore.getters.getById;