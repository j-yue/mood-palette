import React from "react";
import { Flex } from "rebass";
import Tile from "./tile";

const Mood = ({ images, colors }) => {
  let count = 0;
  return (
    <Flex>
      {images.map(image => (
        <Tile src={image} colors={colors[count++]} />
      ))}
    </Flex>
  );
};

export default Mood;
