import React from "react";
import { Box } from "rebass";
import SlidePanel from "./slidePanel";
import Mood from "./mood";

const Workspace = ({ slidePanel, images, colors, moods }) => {
  return (
    <Box
      //   px={82}
      width="100%"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* <SlidePanel src={slidePanel} style={{ position: "fixed" }} /> */}
      <Box
        width="100%"
        style={
          {
            //   paddingTop: "24px"
            //   width: "100%"
            //   minWidth: "100vw"
          }
        }
      >
        <Mood name="wild west" images={images} colors={colors} />
        {moods.map(mood => (
          <Mood name="Mood" images={mood} colors={colors} />
        ))}
      </Box>
    </Box>
  );
};

export default Workspace;
