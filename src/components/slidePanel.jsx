import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { Box, Flex } from "rebass";
import BlurredImage from "./blurredImage";
import RoundColor from "./roundColor";

const SlidePanel = ({ src, colors }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <div
      style={{
        width: "40%",
        height: "70vh",
        background: "#aaa",
        position: "fixed",
        bottom: "0",
        right: "0"
      }}
    >
      <i data-eva="close" />
      <h3>Mood Board name</h3>
      <Box sx={{ width: "30%" }}>
        <BlurredImage src={src} />
      </Box>
      <Box
        sx={{
          width: "30%",
          height: "50%",
          background: "black",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        {/* <Flex> */}
        <RoundColor color={"#222"} />
        <RoundColor color={"#666"} />
        {/* </Flex> */}
      </Box>
      <p>images</p>
      <p>images</p>
      <p>images</p>
    </div>
  );
};

export default SlidePanel;
