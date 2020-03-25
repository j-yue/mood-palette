import React from "react";
import { Heading } from "rebass";

const Logo = () => {
  return (
    <Heading
      as="h1"
      color="secondary"
      // bg="logo"
      width="100%"
      sx={{
        textAlign: "left",
        fontSize: "4.5rem",
        lineHeight: "5rem"
      }}
    >
      Mood Colors
    </Heading>
  );
};

export default Logo;
