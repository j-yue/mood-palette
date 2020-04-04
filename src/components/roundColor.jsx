import React from "react";
import { Box } from "rebass";

const RoundColor = ({ color }) => {
  return (
    <Box
      bg={color}
      variant="roundColor"
      sx={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "1.25rem",
        border: "3px solid #fff"
      }}
    ></Box>
  );
};

export default RoundColor;
