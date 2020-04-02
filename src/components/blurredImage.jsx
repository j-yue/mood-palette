import React, { useState, useRef } from "react";
import { Image } from "rebass";

const BlurredImage = ({ src, variant, initialBlur, ...handlers }) => {
  const [blur, setBlur] = useState(initialBlur);
  const mouseLeaveBlur = initialBlur ? initialBlur : "0";
  const { handleLoad, setPalette } = handlers;
  const imgRef = useRef(null);

  return (
    <Image
      onMouseEnter={() => setBlur("6px")}
      onMouseLeave={() => setBlur(mouseLeaveBlur)}
      variant={variant}
      ref={imgRef}
      src={src}
      sx={{
        filter: `blur(${blur})`
      }}
      onLoad={() => {
        setPalette(handleLoad(imgRef.current));
      }}
      crossOrigin="anonymous"
    />
  );
};

export default BlurredImage;
