import { createRouter, createWebHistory } from 'vue-router';
import { homeRoutes } from '@/domains/home/routes';
import { bookRoutes } from '../domains/books/routes';
import { authorRoutes } from '../domains/authors/routes';
import { reviewRoutes } from '@/domains/reviews/routes';
import { resetErrorMessages } from '@/services/error/reset';

export const router = createRouter({
	history: createWebHistory(),
	routes: [...homeRoutes, ...bookRoutes, ...authorRoutes, ...reviewRoutes],
});

router.beforeEach((to, from) => {
	resetErrorMessages();
	return true;
})