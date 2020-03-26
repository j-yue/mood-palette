import React from "react";
import { Flex } from "rebass";
import Color from "./color";
import BlurredImage from "./blurredImage";

const Tile = ({ src, colors }) => {
  let count = 0;
  return (
    <React.Fragment>
      <BlurredImage src={src} />
      {/* swatches */}
      <Flex width="100%">
        {colors.map(color => (
          <Color key={color + count++} color={color} />
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default Tile;
