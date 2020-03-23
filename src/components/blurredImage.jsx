import React from "react";
import { Image } from "rebass";

const BlurredImage = ({ src }) => {
  return <Image className="blurImage" src={src} />;
};

export default BlurredImage;
