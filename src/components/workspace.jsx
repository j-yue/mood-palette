import React from "react";
import { Box, Flex } from "rebass";
import SlidePanel from "./slidePanel";
import Mood from "./mood";

const Workspace = ({ slidePanel, images, colors, moods }) => {
  //generate unique key
  let count = 0;
  return (
    <Flex>
      <SlidePanel
        src={slidePanel}
        sx={{ position: "fixed", display: "none" }}
        colors={["#444000", "#888123", "#555021"]}
      />
      <Box width="100%" height="18rem" pt={24}>
        <Mood name="wild west" images={images} colors={colors} />
        {moods.map(mood => (
          <Mood name="Mood" key={count++} images={mood} colors={colors} />
        ))}
      </Box>
    </Flex>
  );
};

export default Workspace;
