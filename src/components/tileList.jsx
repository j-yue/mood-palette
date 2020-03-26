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
        <Flex variant="tileList" key={image + count}>
          <Tile src={image} colors={colors[count++]} />
        </Flex>
      ))}
    </Flex>
  );
};

export default TileList;
