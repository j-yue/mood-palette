import React from "react";
import * as Rebass from "rebass";

//component will be used in tile and sidepanel multiple times
const Image = ({ src, blur, variant }) => {
  return (
    <Rebass.Image
      variant={variant}
      src={src}
      height="10rem"
      width="100%"
      sx={{ filter: `blur(${blur})` }}
    />
  );
};

export default Image;
