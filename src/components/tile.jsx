import React from "react";
import { Box, Flex } from "rebass";
import Color from "./color";
import Image from "./image";

const Tile = ({ src, colors }) => {
  let count = 0;
  return (
    <Box>
      <Flex flexDirection="row" flexWrap="wrap">
        <Image src={src} />
        <Flex width="100%">
          {colors.map(color => (
            <Color
              key={color + count++}
              color={color}
              style={{ minWidth: "30%" }}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tile;
