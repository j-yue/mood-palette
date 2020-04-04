//used to calculate the height of container for suggestionsin searchbar
const calcHeight = length => {
  if (length === 0) return 0;
  if (length <= 5) return length;
  return 5;
};

const handleClick = (word, setSearch, setGlobalSearch, setShowSuggestions) => {
  setSearch(word);
  setGlobalSearch(word);
  setShowSuggestions(false);
};

export { calcHeight, handleClick };
