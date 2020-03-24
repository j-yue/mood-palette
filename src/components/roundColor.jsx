import React from "react";
import { Box } from "rebass";
import Color from "./color";

const RoundColor = ({ color }) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        border: "3px solid #fff",
        // width: "30%",
        // height: "30%",
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
