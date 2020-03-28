import React, { useState } from "react";
import { Flex, Box } from "rebass";
import ColorThief from "colorthief";
import Color from "./color";
import BlurredImage from "./blurredImage";
import toHex from "./utils/toHex";

const handleLoad = img => {
  const colorThief = new ColorThief();
  return colorThief.getPalette(img, 3);
};

const Tile = ({ src, colors }) => {
  const [palette, setPalette] = useState(null);

  let count = 0;
  return (
    <Flex variant="tile">
      <BlurredImage
        src={src}
        variant="tileImage"
        initialBlur="0"
        handleLoad={handleLoad}
        setPalette={setPalette}
      />
      {/* swatches */}
      <Flex variant="swatches">
        {palette &&
          palette.map(color => (
            <Color key={color + count++} color={toHex(color)} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Tile;
