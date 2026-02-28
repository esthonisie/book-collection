import { fetchAuthor } from "@/domains/authors/store";

export const updateBooksCount = (id: number) => {
  fetchAuthor(id);
};