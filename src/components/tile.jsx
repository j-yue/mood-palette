import React from "react";
import { Flex } from "rebass";
import Color from "./color";
import BlurredImage from "./blurredImage";

const Tile = ({ src, colors }) => {
  let count = 0;
  return (
    <Flex variant="tile">
      <BlurredImage src={src} variant="tileImage" />
      {/* swatches */}
      <Flex heigh="5rem">
        {colors.map(color => (
          <Color key={color + count++} color={color} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Tile;
