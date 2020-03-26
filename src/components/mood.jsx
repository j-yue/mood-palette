import React from "react";
import { Flex, Heading, Box } from "rebass";
import TileList from "./tileList";
import ArrowIcon from "./arrowIcon";

const Mood = ({ name, images, colors }) => {
  return (
    <Flex variant="flexCenter">
      <Box variant="leftArrow">
        <ArrowIcon name="arrow-left" />
      </Box>

      <Flex overflow="hidden" mb="2rem">
        {/* set max height to smaller size than inner container to hide scrollbar */}
        <Box variant="mood">
          <Heading as="h2" variant="mood">
            {name}
          </Heading>

          <TileList images={images} colors={colors} />
        </Box>
      </Flex>

      <Box variant="rightArrow">
        <ArrowIcon name="arrow-right" />
      </Box>
    </Flex>
  );
};

export default Mood;
