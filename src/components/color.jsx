import React from "react";
import { Box } from "rebass";

const Color = ({ color }) => {
  return (
    <Box width={1 / 3} minWidth={1 / 3} height="49px" bg={color} color={color}>
      hi
    </Box>
  );
};

export default Color;
