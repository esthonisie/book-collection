// helper functions for the state object, an object with nested objects

export const sortByProperty = (object: {}, prop: string) => {
  const array: { [key: string]: any }[] = Object.values(object);
  return array.sort((a, b) => a[prop].localeCompare(b[prop]));
}

export const filterByProperty = (object: {}, prop: string, matchWith: number | string) => {
  const array: { [key: string]: any }[] = Object.values(object);
  return array.filter(el => el[prop] === matchWith);
}

export const filterById = (object: {}, id: number) => {
  const array: { [key: string]: number }[] = Object.values(object);
  return array.filter(el => el['id'] === id);
}

export const checkSome = (object: {}, prop: string, matchWith: number | string) => {
  const array: { [key: string]: any }[] = Object.values(object);
  return array.some(el => el[prop] === matchWith);
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
  //no need to know the total length, when it's 2 exit the loop
  let count = 0;

  for (let key in object) {
    if (object.hasOwnProperty(key) && count < 2) {
      count++;
    }
  }
  
  return count < 2;
}
