import React, { useContext } from "react";
import { Box, Flex, Heading } from "rebass";
import Tile from "./tile";

import { GlobalContext } from "../context/globalContext";

// const UNSPLASH_ENDPT = "https://api.unsplash.com/photos/?client_id=";

const renderImages = images => {
  if (images.length === 0) return <Heading as="h2">No results found</Heading>;
  let count = 0;
  return (
    <React.Fragment>
      <Heading as="h2">Search Results</Heading>
      {images.map(index => {
        return <Tile src={index.src} name="Search Results" key={count++} />;
      })}
    </React.Fragment>
  );
};

const SearchResults = () => {
  const { searchResults } = useContext(GlobalContext);
  // console.log(searchResults);
  // const { src, download, name, link } = searchResults;
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
      {renderImages(searchResults)}
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

export default SearchResults;
