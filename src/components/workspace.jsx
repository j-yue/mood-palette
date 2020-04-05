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
    // moods,
    // setMoods,
    searchResults,
    search,
    searchHistory,
    setSearchHistory,
  } = props;

  //update search history state whenever there is a nonempty change made to search results
  useEffect(() => {
    if (searchResults.length > 0)
      setSearchHistory([
        { search: search, results: searchResults },
        ...searchHistory,
      ]);
  }, [searchResults]);

  // let showMoods = false;
  const [moods, setMoods] = useState([]);
  const [showMoods, setShowMoods] = useState(false);

  useEffect(() => {
    const words = randomWords();
    const fetchMood = async (word) => {
      return await fetchResults(word);
    };

    let promises = words.map((word) => fetchMood(word));
    Promise.all(promises)
      .then((results) => setMoods({ words: words, results: results }))
      .then(() => setShowMoods(true));
    // setShowMoods(true);
  }, []);

  useEffect(() => {
    if (showMoods) console.log(moods.words);
  }, [showMoods]);

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
          .map((index) => (
            <SearchHistory history={index} key={historyCount++} />
          ))}
      {showMoods &&
        !search &&
        moods.words.map((word) => (
          <Carousel name={word} data={moods.results[count]} key={count++} />
        ))}
    </Flex>
  );
};

export default Workspace;
