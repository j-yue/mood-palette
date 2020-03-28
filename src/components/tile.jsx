import React from "react";
import { Flex, Box } from "rebass";
import Color from "./color";
import BlurredImage from "./blurredImage";

const Tile = ({ src, colors }) => {
  let count = 0;
  return (
    <Flex variant="tile">
      <BlurredImage src={src} variant="tileImage" initialBlur="0" />
      {/* swatches */}
      <Flex variant="swatches">
        {colors.map(color => (
          <Color key={color + count++} color={color} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Tile;
