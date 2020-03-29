import React from "react";
import { Heading, Box } from "rebass";
import Carousel from "./carousel";

const Mood = ({ name, images, colors }) => {
  return (
    <Box variant="mood">
      <Heading as="h2" variant="moodHeader" pl="3.5rem">
        {name}
      </Heading>

      <Carousel images={images} colors={colors} name={name} />
    </Box>
  );
};

export default Mood;
