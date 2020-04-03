import React from "react";
import { Heading, Box } from "rebass";

//wraps component with a heading
const withHeading = (Component, boxVariant, headingVariant, name) => ({
  ...props
}) => {
  return (
    <Box variant={boxVariant}>
      <Heading as="h2" variant={headingVariant}>
        {name}
      </Heading>
      <Component {...props} />
    </Box>
  );
};

export default withHeading;
