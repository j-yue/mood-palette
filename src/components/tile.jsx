import React from "react";
import { Box, Flex } from "rebass";
import Color from "./color";
import Image from "./image";

// const

const Tile = ({ src, colors }) => {
  //unique key
  let count = 0;
  return (
    <Box sx={{ width: "20%" }}>
      <Image
        src={src}
        // handleMouseEnter={() => console.log("hi")}
      />
      <Flex>
        {colors.map(color => (
          <Color key={color + count++} color={color} />
        ))}
      </Flex>
    </Box>
  );
};

export default Tile;
