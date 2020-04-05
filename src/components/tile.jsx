import React, { useState, useContext } from "react";
import { Flex } from "rebass";
import Color from "./color";
import BlurredImage from "./blurredImage";
import { handleClick, handleLoad } from "./utils/tile";
import { GlobalContext } from "../context/globalContext";

const Tile = ({ src, name, credits, link, download, ...styles }) => {
  const [palette, setPalette] = useState(null);
  const { setSlidePanel } = useContext(GlobalContext);
  let count = 0;
  return (
    <Flex
      variant="tile"
      onClick={() =>
        handleClick(setSlidePanel, src, palette, name, credits, link, download)
      }
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
          palette.map((color) => <Color key={color + count++} color={color} />)}
      </Flex>
    </Flex>
  );
};

export default Tile;
