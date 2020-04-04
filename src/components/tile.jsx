import React, { useState, useContext } from "react";
import { Flex, Box } from "rebass";
import ColorThief from "colorthief";
import Color from "./color";
import BlurredImage from "./blurredImage";
import toHex from "./utils/toHex";

import { GlobalContext } from "../context/globalContext";

const handleLoad = img => {
  const colorThief = new ColorThief();
  // return colorThief.getPalette(img, 3);
  const palette = colorThief.getPalette(img, 3);
  return palette.map(rgb => toHex(rgb));
};

const Tile = ({ src, name, credits, link, ...styles }) => {
  const [palette, setPalette] = useState(null);
  const { setSlidePanel } = useContext(GlobalContext);
  let count = 0;
  return (
    <Flex
      variant="tile"
      onClick={() => setSlidePanel({ src, palette, name, credits, link })}
      {...styles}
    >
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
          palette.map(color => <Color key={color + count++} color={color} />)}
      </Flex>
    </Flex>
  );
};

export default Tile;
