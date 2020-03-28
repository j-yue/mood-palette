import React from "react";
import { Flex } from "rebass";
// import SlidePanel from "./slidePanel";
import Mood from "./mood";

const Workspace = ({ slidePanel, images, colors, moods }) => {
  //generate unique key
  let count = 0;
  return (
    <Flex variant="workspace">
      {moods.map(mood => (
        <Mood name="Mood" key={count++} images={mood} colors={colors} />
      ))}
    </Flex>
  );
};

export default Workspace;
