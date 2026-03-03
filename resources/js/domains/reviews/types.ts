export interface Review {
	id: number;
	book_id: number;
	body: string;
	username: string;
	created_at?: string;
}