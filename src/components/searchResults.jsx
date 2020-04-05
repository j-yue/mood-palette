import React, { useContext } from "react";
import { Flex } from "rebass";
import Tile from "./tile";

import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";

const renderImages = (images, name) => {
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

const Images = ({ search, searchResults }) => {
  return (
    <Flex
      sx={{
        px: "3.5rem",
        flexFlow: "row wrap",
        justifyContent: "space-between",
      }}
    >
      {renderImages(searchResults, search)}
    </Flex>
  );
};

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
