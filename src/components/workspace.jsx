import React from "react";
import { Box } from "rebass";
import SlidePanel from "./slidePanel";
import Mood from "./mood";

const Workspace = ({ slidePanel, images, colors, moods }) => {
  return (
    <Box
      pt={317}
      width="100%"
      height="100%"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <SlidePanel
        src={slidePanel}
        sx={{ position: "fixed" }}
        colors={["#444000", "#888123", "#555021"]}
      />
      <Box width="100%">
        <Mood name="wild west" images={images} colors={colors} />
        {moods.map(mood => (
          <Mood name="Mood" images={mood} colors={colors} />
        ))}
      </Box>
    </Box>
  );
};

export default Workspace;
