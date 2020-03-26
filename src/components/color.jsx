import React from "react";
import { Box } from "rebass";

const Color = ({ color }) => {
  return (
    <Box variant="color" bg={color} color={color}>
      hi
    </Box>
  );
};

export default Color;
