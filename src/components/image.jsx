import React from "react";
import * as Rebass from "rebass";

const Image = ({ src }) => {
  return (
    <Rebass.Image
      src={src}
      //   sx={{ width: "15vw", height: "15vw" }}
    />
  );
};

export default Image;
