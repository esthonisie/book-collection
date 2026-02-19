// helper functions for the state object, an object with nested objects

export const sortByProperty = (object: {}, prop: string) => {
  const array = Object.values(object);
  return array.sort((a, b) => a[prop].localeCompare(b[prop]));
}

export const filterByProperty = (object: {}, prop: string, matchWith: number | string) => {
  const array = Object.values(object);
  return array.filter(el => el[prop] === matchWith);
}

export const isObjectEmpty = (object: {}) => {
  return JSON.stringify(object) === "{}";
};
