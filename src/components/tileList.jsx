import React from "react";
import { Flex } from "rebass";
import Tile from "./tile";

const TileList = ({ images, colors }) => {
  //unique key
  let count = 0;
  return (
    <Flex>
      {images.map(image => (
        <Tile src={image} key={image + count} colors={colors[count++]} />
      ))}
    </Flex>
  );
};

export default TileList;
