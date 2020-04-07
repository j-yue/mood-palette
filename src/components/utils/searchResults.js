import React from "react";
import { Flex } from "rebass";
import Tile from "../tile";

const renderImages = (images, name) => {
  let count = 0;
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

export default Images;
