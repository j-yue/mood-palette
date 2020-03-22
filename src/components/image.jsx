import React, { useState } from "react";
import * as Rebass from "rebass";

const Image = ({ src }) => {
  const [className, setClassName] = useState(null);

  return (
    <Rebass.Image
      className={className}
      src={src}
      onMouseEnter={() => setClassName("blurImage")}
      onMouseLeave={() => setClassName(null)}
    />
  );
};

export default Image;
