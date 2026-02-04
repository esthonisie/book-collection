import { deleteRequest, getRequest, postRequest, putRequest } from '../../services/http';
import { ref, computed } from 'vue';
import type { Author } from './types';

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