import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { Box, Image, Flex } from "rebass";
import BlurredImage from "./blurredImage";
import RoundColor from "./roundColor";
import Swatch from "./swatch";
// import Image from './image';

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
        right: "0",
        overflowY: "scroll"
      }}
    >
      <i data-eva="close" />
      <h3>Mood Board name</h3>
      {/* <Flex> */}
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
        <RoundColor color={"#222"} />
        <RoundColor color={"#666"} />
      </Box>
      {/* </Flex> */}
      <Box>
        <Image src={src} sx={{ height: "100px" }} />
      </Box>
      <Box>
        <Swatch color="#444" />
        <Swatch color="#ccc123" />
        <Swatch color="#444" />
      </Box>
    </div>
  );
};

export default SlidePanel;
