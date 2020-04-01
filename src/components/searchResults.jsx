import React, { useContext } from "react";
import { Box, Flex } from "rebass";
import Tile from "./tile";

import { GlobalContext } from "../context/globalContext";

const UNSPLASH_ENDPT = "https://api.unsplash.com/photos/?client_id=";
// console.log(process.env);
const fetchResult = query => {};

const SearchResults = ({ name = "Search Results" }) => {
  const { search } = useContext(GlobalContext);

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
      {/* {searchResults.map(image => (
        <Tile src={image} name={name} key={count++} m="0" mb="2rem" /> */}
      ))}
    </Flex>
  );
};

export default SearchResults;
