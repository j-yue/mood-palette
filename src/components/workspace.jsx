import React, { useEffect } from "react";
import { Flex } from "rebass";
import Carousel from "./carousel";
import UploadedImages from "./uploadedImages";
import SearchResults from "./searchResults";
import SearchHistory from "./searchHistory";

const Workspace = ({ ...props }) => {
  const {
    uploadedImages,
    moods,
    searchResults,
    search,
    searchHistory,
    setSearchHistory
  } = props;

  //update search history state whenever there is a nonempty change made to search results
  useEffect(() => {
    if (searchResults.length > 0)
      setSearchHistory([
        { search: search, results: searchResults },
        ...searchHistory
      ]);
  }, [searchResults]);

  //generate unique key
  let count = 0;
  let historyCount = 0;
  return (
    <Flex variant="workspace">
      {/* if user made a search, show results */}
      {search && <SearchResults />}
      {/* otherwise display any uploaded images and moods */}
      {!search && uploadedImages && <UploadedImages />}
      {!search &&
        searchHistory.length > 0 &&
        searchHistory
          .slice(0, 3)
          .map(index => <SearchHistory history={index} key={historyCount++} />)}
      {!search &&
        moods.map(mood => (
          <Carousel images={mood} name={`carousel${count}`} key={count++} />
        ))}
    </Flex>
  );
};

export default Workspace;
