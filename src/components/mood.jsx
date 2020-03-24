import React, { useEffect } from "react";
import { Flex, Heading, Box } from "rebass";
import * as eva from "eva-icons";
import TileList from "./tileList";

const Mood = ({ name, images, colors }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <Flex
      mx={82}
      alignItems="center"
      justifyContent="space-evenly"
      maxWidth="100%"
      // style={{ boxSizing: "border-box" }}
    >
      <Box>
        <i
          data-eva="arrow-left"
          data-eva-fill="#D8D8D8"
          data-eva-width="44px"
          data-eva-height="30px"
        />
      </Box>
      <Flex mx={44} overflow="hidden">
        <Box>
          <Heading
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "36px",
              lineHeight: "49px",
              paddingBottom: "9px"
            }}
          >
            {name}
          </Heading>
          <TileList images={images} colors={colors} />
        </Box>
      </Flex>
      <Box>
        <i
          data-eva="arrow-right"
          data-eva-fill="#D8D8D8"
          data-eva-width="44px"
          data-eva-height="30px"
        />
      </Box>
    </Flex>
  );
};

export default Mood;
