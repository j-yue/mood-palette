import React, { useState, useRef } from "react";
import { Image } from "rebass";

const BlurredImage = ({
  src,
  variant,
  initialBlur,
  ...handlers
  // handleLoad,
  // setPalette
}) => {
  const [blur, setBlur] = useState(initialBlur);
  const mouseLeaveBlur = initialBlur ? initialBlur : "0";
  const { handleLoad, setPalette } = handlers;
  const imgRef = useRef(null);
  // console.log(handleLoad);
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
    />
  );
};

export default BlurredImage;
