import React, { useState } from "react";
import { Image } from "rebass";

const BlurredImage = ({ src, variant }) => {
  const [blur, setBlur] = useState(null);
  return (
    <Image
      onMouseEnter={() => setBlur("6px")}
      onMouseLeave={() => setBlur(null)}
      variant={variant}
      src={src}
      sx={{
        filter: `blur(${blur})`
      }}
    />
  );
};

export default BlurredImage;
