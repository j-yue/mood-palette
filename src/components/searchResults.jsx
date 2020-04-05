import React, { useContext } from "react";
import { Box, Flex, Heading, Button } from "rebass";
import Tile from "./tile";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";

const renderImages = (images, name) => {
  if (images.length === 0) return <Heading as="h2">No results found</Heading>;
  let count = 0;
  return (
    <React.Fragment>
      {images.map((index) => {
        return (
          <Tile
            src={index.src}
            name={name}
            key={count++}
            credits={index.name}
            link={index.link}
            download={index.download}
            m="0"
            mb="2rem"
          />
        );
      })}
    </React.Fragment>
  );
};

const SearchResults = () => {
  const { search, searchResults } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <Flex
        sx={{
          px: "3.5rem",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        {renderImages(searchResults, search)}
      </Flex>
      <Button variant="uploadeButton">More</Button>
    </React.Fragment>
  );
};

// export default SearchResults;
export default withHeading(
  SearchResults,
  "moodUploaded",
  "header",
  "Search Results"
);
