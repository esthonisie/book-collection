import { getAllAuthors, authorStore } from "@/domains/authors/store";
import { filterById } from "./stateObject";

// TODO: onderstaande functie kan helemaal weg als je dynamisch met javascript de book count laat tellen voor elke auteur. Dit scheelt je code en complexiteit.
export const updateBooksCount = (id: number, increase = true) => {
  // TODO: waarom een eigen helper functie gebruiken als er al een getAuthorById functie is? Dan hoef je ook geen array destructuring te gebruiken
  const [author] = filterById(getAllAuthors.value, id);

  //undo Object.freeze()
  const authorCopy = JSON.parse(JSON.stringify(author));

  authorCopy.books_count = increase ? authorCopy.books_count + 1 : authorCopy.books_count - 1;
  authorStore.setters.setById(authorCopy);
};