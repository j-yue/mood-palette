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
      height="190px"
      style={{
        borderTopRightRadius: "22px",
        borderTopLeftRadius: "22px"
      }}
    />
  );
};

export default Image;
