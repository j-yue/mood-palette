import React from "react";
import { Heading, Box } from "rebass";

const Mood = ({ name, images, Component, variant }) => {
  return (
    <Box variant={variant}>
      <Heading as="h2" variant="moodHeader" pl="3.5rem">
        {name}
      </Heading>

      <Component images={images} name={name} />
    </Box>
  );
};

export default Mood;
