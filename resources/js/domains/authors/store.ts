import { storeModuleFactory } from '@/services/store';
import type { Author } from './types';

// state
const authorStore = storeModuleFactory('authors');

// actions
export const fetchAuthors = async () => {
	await authorStore.actions.getAll();
};

export const createAuthor = async (newAuthor: Author) => {
	await authorStore.actions.create(newAuthor);
}

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
	await authorStore.actions.update(id, updatedAuthor);
}

export const deleteAuthor = async (id: number) => {
	await authorStore.actions.delete(id);
}

// getters
export const getAllAuthors = authorStore.getters.all;
export const getAuthorById = authorStore.getters.getById;

// ------------- OLD --------------------------------------
/* 
// state
const authors = ref<Author[]>([]);

// actions
export const fetchAuthors = async () => {
	const {data} = await getRequest('/authors');
	if(!data) return
	authors.value = data;
};

export const createAuthor = async (newAuthor: Author) => {
	const {data} = await postRequest('/authors', newAuthor);
	if(!data) return
	authors.value = data;
};

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
	const { data } = await putRequest(`/authors/${id}`, updatedAuthor);
	if (!data) return;
	authors.value = data;
};

export const deleteAuthor = async (id: number) => {
	await deleteRequest(`/authors/${id}`);
	authors.value = authors.value.filter(author => author.id !== id);
};

// getters
export const getAllAuthors = computed<Author[]>(() => authors.value);
export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id === id));
 */