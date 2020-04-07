//functions for searchBar and autoComplete components

import SUGGESTIONS from "./suggestions";

//return a random index from 0 to suggestions.length-1
const randomIndex = (length = SUGGESTIONS.length) => {
  return parseInt(Math.random() * length);
};

const randomIndexes = (numWords) => {
  let indexes = [];
  while (indexes.length < numWords) {
    const index = randomIndex();
    if (!indexes.includes(index)) indexes.push(index);
  }
  return indexes;
};

const randomWords = (numWords = 3, list = SUGGESTIONS) => {
  const indexes = randomIndexes(numWords);
  return indexes.map((index) => list[index]);
};

const getSuggestions = (search, list = SUGGESTIONS) => {
  try {
    let regexStr = `^${search}.*$`; //any str beggining with search str
    let regex = new RegExp(regexStr, "ig");
    return list.filter((word) => regex.test(word));
  } catch {
    // if user's search contains invalid characters, display the 0 results message
    return [];
  }
};

//extract desired data from fetch response
const filterResults = (results) => {
  let images = [];
  if (results.length === 0) return [];
  for (let imgObj of results) {
    const { urls, links, user } = imgObj;
    images.push({
      src: urls.small,
      download: links.download_location,
      name: user.name,
      link: user.links.html,
    });
  }
  return images;
};

const handleChange = (value, ...handlers) => {
  const [
    setSearch,
    setSuggestions,
    setShowSuggestions,
    setGlobalSearch,
  ] = handlers;
  setSearch(value);
  setSuggestions(getSuggestions(value));
  setShowSuggestions(true);
  if (!value) setGlobalSearch([]);
};

const handleKeyPress = (e, setGlobalSearch) => {
  if (e.key === "Enter") setGlobalSearch(e.target.value);
};

const fetchResults = (word) => {
  const KEY = process.env.REACT_APP_UNSPLASH_KEY;
  const ENDPT = `https://api.unsplash.com/search/photos?page=1&query=`;
  return fetch(ENDPT + word + `&client_id=${KEY}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .then((results) => filterResults(results));
};

//whenever global search changes, update local state
//if global search is empty, set to empty string
const handleGlobalSearchChange = (
  setSuggestions,
  setSearch,
  globalSearch,
  setSearchResults,
  setGlobalSearch,
  isEmpty
) => {
  setSearchResults(null);
  setSuggestions([]);
  setSearch(globalSearch);
  fetchResults(globalSearch).then((data) => setSearchResults(data));
  if (isEmpty) setGlobalSearch("");
};

export {
  randomWords,
  handleChange,
  handleKeyPress,
  handleGlobalSearchChange,
  fetchResults,
};
