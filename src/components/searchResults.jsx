import { useContext } from "react";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";
import Images from "./utils/searchResults";

const SearchResults = () => {
  const { search, searchResults } = useContext(GlobalContext);
  const header =
    searchResults.length === 0
      ? "0 results found! Try rephrasing your search."
      : search;
  const everything = withHeading(
    Images,
    "moodUploaded",
    "header",
    header
  )({ search, searchResults });
  return everything;
};

export default SearchResults;
