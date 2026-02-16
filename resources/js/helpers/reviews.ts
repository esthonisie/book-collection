// for filtered book/reviews array with review objects
export const sortByIdDesc = (arr: [], id_prop: string) => {
  return arr.sort((a, b) => b[id_prop] - a[id_prop]);
}

// just for fun
export const userName = () => {
  const names = ['Captain Flint', 'Long John Silver', 'Hornblower', 'Mr. Darcy', 
    'Elizabeth Bennet', 'Herman Toothrot', 'Mr. Rochester', 'Jane Eyre',
    'Elaine Marley', 'Guybrush Threepwood', 'Fester Shinetop', 'the Dude', 'the Queen'];
  return names[Math.floor(Math.random() * names.length)];
}