import React from "react";
import { Box } from "rebass";
import Color from "./color";

const RoundColor = ({ color }) => {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid #fff",
        width: "30%",
        height: "30%",
        // display: "inline-block",
        // minHeight: "30%",
        background: color
      }}
    >
      {/* <Color color={color} style={{ width: "100%" }} /> */}
    </Box>
  );
};

export default RoundColor;
