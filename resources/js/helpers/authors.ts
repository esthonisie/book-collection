import { getAllAuthors, authorStore } from "@/domains/authors/store";
import { filterById } from "./stateObject";

export const updateBooksCount = (id: number, increase = true) => {
  const [author] = filterById(getAllAuthors.value, id);

  //undo Object.freeze()
  const authorCopy = JSON.parse(JSON.stringify(author));

  authorCopy.books_count = increase ? authorCopy.books_count + 1 : authorCopy.books_count - 1;
  authorStore.setters.setById(authorCopy);
};