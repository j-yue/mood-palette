import React from "react";
import { Flex, Box } from "rebass";
import Tile from "./tile";

const TileList = ({ images, colors }) => {
  //unique key
  let count = 0;
  return (
    <Flex
      //scrollbar will be hidden in parent container
      overflowX="scroll"
      ml={-12}
      zIndex={1}
      className="tileList"
      justifyContent="flex-start"
    >
      {images.map(image => (
        <Box minWidth="298px" px="12px">
          <Tile src={image} key={image + count} colors={colors[count++]} />
        </Box>
      ))}
    </Flex>
  );
};

export default TileList;
