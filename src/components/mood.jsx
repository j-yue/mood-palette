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
      my={24}
      alignItems="center"
      justifyContent="center"
      maxWidth="100%"
      overflow="hidden"
    >
      <Box
        className="left-wrapper"
        maxWidth="0"
        sx={{ position: "relative", left: "75px" }}
      >
        <i
          data-eva="arrow-left"
          data-eva-fill="#D8D8D8"
          data-eva-width="44px"
          data-eva-height="30px"
        />
      </Box>
      <Flex overflow="hidden">
        {/* set max height to smaller size than inner container to hide scrollbar */}
        <Box maxWidth="100%" mx={135} maxHeight="297px" overflow="hidden">
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
      <Box
        maxWidth="0"
        sx={{ position: "relative", right: "119px", zIndex: "100" }}
      >
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
