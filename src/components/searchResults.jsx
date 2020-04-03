import React, { useContext } from "react";
import { Box, Flex, Heading } from "rebass";
import Tile from "./tile";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";

const renderImages = (images, name) => {
  if (images.length === 0) return <Heading as="h2">No results found</Heading>;
  let count = 0;
  return (
    <React.Fragment>
      {images.map(index => {
        return <Tile src={index.src} name={name} key={count++} />;
      })}
    </React.Fragment>
  );
};

const SearchResults = () => {
  const { search, searchResults } = useContext(GlobalContext);
  //generate key
  let count = 0;
  return (
    <Flex
      className="searchResults"
      // variant=""
      sx={{
        px: "3.5rem",
        flexFlow: "row wrap",
        justifyContent: "space-between"
      }}
    >
      {renderImages(searchResults, search)}
      {/* <Heading as="h2">Search Results</Heading>
      {searchResults.map(index => (
        <Tile
          src={index.src}
          name="Search Results"
          key={count++}
          m="0"
          mb="2rem"
        />
      ))} */}
    </Flex>
  );
};

// export default SearchResults;
export default withHeading(
  SearchResults,
  "moodUploaded",
  "moodHeader",
  "Search Results"
);
