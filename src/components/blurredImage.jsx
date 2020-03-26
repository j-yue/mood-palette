// wrap component in Box with blur effect event handlers
import React, { useState } from "react";
import { Box } from "rebass";
import Image from "./image";

const BlurredImage = ({ src }) => {
  const [blur, setBlur] = useState(null);
  return (
    <Box
      onMouseEnter={() => setBlur("6px")}
      onMouseLeave={() => setBlur(null)}
      width="100%"
    >
      <Image src={src} blur={blur} variant="tileImage" />
    </Box>
  );
};

export default BlurredImage;
