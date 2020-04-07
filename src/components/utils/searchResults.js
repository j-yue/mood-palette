import React from "react";
import { Flex } from "rebass";
import Tile from "../tile";

const renderImages = (images, name) => {
  let count = 0;
  try {
    return (
      <React.Fragment>
        {images.map((index) => {
          return (
            <Tile
              key={count++}
              src={index.src}
              name={name}
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
  } catch {
    return null;
  }
};

const createHeader = (name, results) => {
  if (results === "error")
    return "Unable to process search. Try rephrasing your search or try again tomorrow.";
  else if (results.length === 0)
    return "0 results found! Try rephrasing your search.";
  return results;
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

export { Images, createHeader };
