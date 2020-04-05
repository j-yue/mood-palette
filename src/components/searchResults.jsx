import { useContext } from "react";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";
import Images from "./utils/searchResults";

const SearchResults = () => {
  const resultsContext = useContext(GlobalContext);
  const { search, searchResults } = resultsContext;
  const everything = withHeading(
    Images,
    "moodUploaded",
    "header",
    search
  )({ search, searchResults });
  return everything;
};

export default SearchResults;
