import { storeModuleFactory } from '@/services/store';
import type { Review } from './types';

const reviewStore = storeModuleFactory('reviews');

// actions
export const fetchReviews = async () => {
	await reviewStore.actions.getAll();
};

export const createReview = async (newReview: Review) => {
	await reviewStore.actions.create(newReview);
}

export const updateReview = async (id: number, updatedReview: Review) => {
	await reviewStore.actions.update(id, updatedReview);
}

export const deleteReview = async (id: number) => {
	await reviewStore.actions.delete(id);
}

// getters
export const getAllReviews = reviewStore.getters.all;
export const getReviewById = reviewStore.getters.getById;