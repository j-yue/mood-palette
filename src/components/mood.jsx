import React from "react";
import { Flex, Heading, Box } from "rebass";
import TileList from "./tileList";
import ArrowIcon from "./arrowIcon";

const Mood = ({ name, images, colors }) => {
  return (
    <Flex className="mood" variant="flexCenter" pt="5.5rem">
      <Box variant="leftArrow">
        <ArrowIcon name="arrow-left" />
      </Box>

      <Flex overflow="hidden">
        {/* set max height to smaller size than inner container to hide scrollbar */}
        <Box variant="mood">
          <Heading as="h2" variant="moodHeader">
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
