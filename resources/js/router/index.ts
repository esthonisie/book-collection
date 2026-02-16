import { createRouter, createWebHistory } from 'vue-router';
import { homeRoutes } from '@/domains/home/routes';
import { bookRoutes } from '../domains/books/routes';
import { authorRoutes } from '../domains/authors/routes';
import { reviewRoutes } from '@/domains/reviews/routes';

export const router = createRouter({
	history: createWebHistory(),
	routes: [...homeRoutes, ...bookRoutes, ...authorRoutes, ...reviewRoutes],
});