import React, { useContext } from "react";
import { Box, Flex, Heading } from "rebass";
import Tile from "./tile";

import { GlobalContext } from "../context/globalContext";

// const UNSPLASH_ENDPT = "https://api.unsplash.com/photos/?client_id=";

const SearchResults = ({ name = "Search Results" }) => {
  const { searchResults } = useContext(GlobalContext);
  console.log(searchResults);
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
      <Heading as="h2">{name}</Heading>
      {/* {searchResults.map(image => (
        <Tile src={image} name={name} key={count++} m="0" mb="2rem" />
      ))} */}
    </Flex>
  );
};

export default SearchResults;
