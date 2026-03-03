import { storeModuleFactory } from '@/services/store';
import type { Review } from './types';
import type { New, Updatable } from '@/services/store/types';

const reviewStore = storeModuleFactory<Review>('reviews');

// actions
export const fetchReviews = async () => {
	await reviewStore.actions.getAll();
};

export const createReview = async (newReview: New<Review>) => {
	await reviewStore.actions.create(newReview);
};

export const updateReview = async (id: number, updatedReview: Updatable<Review>) => {
	await reviewStore.actions.update(id, updatedReview);
};

export const deleteReview = async (id: number) => {
	await reviewStore.actions.delete(id);
};

// getters
export const getAllReviews = reviewStore.getters.all;
export const getReviewById = reviewStore.getters.getById;