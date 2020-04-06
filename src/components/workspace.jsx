import React, { useState, useEffect } from "react";
import { Flex } from "rebass";
import { randomWords, fetchResults } from "./utils/searchBar";
import Carousel from "./carousel";
import UploadedImages from "./uploadedImages";
import SearchResults from "./searchResults";
import SearchHistory from "./searchHistory";

const Workspace = ({ ...props }) => {
  const {
    uploadedImages,
    searchResults,
    search,
    searchHistory,
    setSearchHistory,
  } = props;

  //update search history state whenever there is a nonempty change made to search results
  useEffect(() => {
    if (searchResults && searchResults.length > 0)
      setSearchHistory([
        { search: search, results: searchResults },
        ...searchHistory,
      ]);
  }, [searchResults]);

  const [moods, setMoods] = useState([]);
  const [moodsInitialized, setMoodsInitialized] = useState(false);

  useEffect(() => {
    const words = randomWords();
    const fetchMood = async (word) => {
      return await fetchResults(word);
    };

    // let promises = words.map((word) => fetchMood(word));
    // Promise.all(promises)
    //   .then((results) => setMoods({ words: words, results: results }))
    //   .then(() => setMoodsInitialized(true));
    console.log("workspace render");
  }, []);

  //generate unique key
  let count = 0;
  let historyCount = 0;

  const showSearch = search !== "" && searchResults;
  const showUploadedImages = !showSearch && uploadedImages;
  const showSearchHistory = !showSearch && searchHistory.length > 0;
  const showMoods = !showSearch && moodsInitialized;

  return (
    <Flex variant="workspace">
      {showSearch && <SearchResults />}

      {showUploadedImages && <UploadedImages />}

      {showSearchHistory &&
        searchHistory
          .slice(0, 3)
          .map((index) => (
            <SearchHistory history={index} key={historyCount++} />
          ))}

      {showMoods &&
        moods.words.map((word) => (
          <Carousel name={word} data={moods.results[count]} key={count++} />
        ))}
    </Flex>
  );
};

export default Workspace;
