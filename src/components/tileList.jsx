import React from "react";
import { Flex } from "rebass";
import Tile from "./tile";

const TileList = ({ images, colors }) => {
  //unique key
  let count = 0;
  return (
    <Flex
      //scrollbar will be hidden in parent container
      variant="tileListWrapper"
    >
      {images.map(image => (
        <Tile src={image} colors={colors[count++]} className="tile" />
      ))}
    </Flex>
  );
};

export default TileList;
