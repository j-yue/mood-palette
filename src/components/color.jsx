import React from "react";
import { Box } from "rebass";

const Color = ({ color }) => {
  return (
    <Box width={1 / 3} sx={{ background: color }}>
      hi
    </Box>
  );
};

export default Color;
