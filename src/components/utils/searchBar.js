//functions for searchBar and autoComplete components

import SUGGESTIONS from "./suggestions";

//return a random index from 0 to suggestions.length-1
const randomIndex = (length = SUGGESTIONS.length) => {
  return parseInt(Math.random() * length);
};

const randomIndexes = numWords => {
  let indexes = [];
  while (indexes.length < numWords) {
    const index = randomIndex();
    if (!indexes.includes(index)) indexes.push(index);
  }
  return indexes;
};

const randomWords = (numWords = 3, list = SUGGESTIONS) => {
  const indexes = randomIndexes(numWords);
  return indexes.map(index => list[index]);
};

const getSuggestions = (search, list = SUGGESTIONS) => {
  let regexStr = `^${search}.*$`; //any str beggining with search str
  let regex = new RegExp(regexStr, "ig");
  return list.filter(word => regex.test(word));
};

export { randomWords, getSuggestions };
