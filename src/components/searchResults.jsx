import { useContext } from "react";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";
import { Images, createHeader } from "./utils/searchResults";

const SearchResults = () => {
  const { search, searchResults } = useContext(GlobalContext);

  const header = createHeader(search, searchResults);

  const everything = withHeading(
    Images,
    "moodUploaded",
    "header",
    header
  )({ search, searchResults });

  return everything;
};

export default SearchResults;
