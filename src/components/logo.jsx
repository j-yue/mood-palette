import React from "react";
import { Heading } from "rebass";

const Logo = () => {
  return (
    <Heading
      fontSize={[5, 6, 7]}
      color="primary"
      sx={{
        color: "#fff",
        textAlign: "left",
        height: "72px",
        width: "373px",
        fontFamily: "Bauer Bodoni Std 2",
        fontSize: "72px",
        letterSpacing: "0",
        lineHeight: "86px"
      }}
    >
      Mood Colors
    </Heading>
  );
};

export default Logo;
