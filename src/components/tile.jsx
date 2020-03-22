import React from "react";
import { Box, Flex } from "rebass";
import Color from "./color";
import Image from "./image";

// const

const Tile = ({ src, colors }) => {
  return (
    <Box sx={{ width: "20%" }}>
      <Image src={src} />
      <Flex>
        {colors.map(color => (
          <Color color={color} />
        ))}
      </Flex>
    </Box>
  );
};

export default Tile;
