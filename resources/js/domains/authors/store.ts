import { storeModuleFactory } from '@/services/store';
import type { Author } from './types';
import type { New, Updatable } from '@/services/store/types';

export const authorStore = storeModuleFactory<Author>('authors');

// actions
export const fetchAuthors = async () => {
	await authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor: New<Author>) => {
	await authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (id: number, updatedAuthor: Updatable<Author>) => {
	await authorStore.actions.update(id, updatedAuthor);
};

export const deleteAuthor = async (id: number) => {
	await authorStore.actions.delete(id);
};

// getters
export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = authorStore.getters.getById;