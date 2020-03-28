import React, { useState } from "react";
import { Image } from "rebass";

const BlurredImage = ({ src, variant, initialBlur }) => {
  const [blur, setBlur] = useState(initialBlur);
  const mouseLeaveBlur = initialBlur ? initialBlur : "0";
  return (
    <Image
      onMouseEnter={() => setBlur("6px")}
      onMouseLeave={() => setBlur(mouseLeaveBlur)}
      variant={variant}
      src={src}
      sx={{
        filter: `blur(${blur})`
      }}
    />
  );
};

export default BlurredImage;
