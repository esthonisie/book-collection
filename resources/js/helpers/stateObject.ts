// helper functions for the state object, an object with nested objects

export const sortByProperty = (object: {}, prop: string) => {
  const array = Object.values(object);
  return array.sort((a, b) => a[prop].localeCompare(b[prop]));
}

export const filterByProperty = (object: {}, prop: string, matchWith: number | string) => {
  const array = Object.values(object);
  return array.filter(el => el[prop] === matchWith);
}

// export const isObjectEmpty = (object: {}) => {
//   return JSON.stringify(object) === "{}";
// };

/* 
In case - for some weird reason - a person reloads the "New Author/Book/Review" page 
and than creates a new author/book/review.
 */
export const isObjectEmpty = (object: {}) => {
  //Object.keys(object).length;
  let count = 0;

  for (let key in object) {
    if (object.hasOwnProperty(key) && count < 2) {
      count++;
    }
  }
  
  return count < 2;
}
