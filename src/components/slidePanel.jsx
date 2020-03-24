import React, { useEffect, useState } from "react";
import * as eva from "eva-icons";
import { Box, Image, Flex, Heading } from "rebass";
import BlurredImage from "./blurredImage";
import RoundColor from "./roundColor";
import Swatch from "./swatch";

const SlidePanel = ({ src, colors }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  const [colorArr, setColorArr] = useState(colors);

  return (
    <Box
      // mx={16}
      style={{
        width: "525px",
        zIndex: "500",
        height: "calc(100vh - 317px)",
        background: "#fff",
        position: "fixed",
        top: "317px",
        right: "0",
        marginRight: "-25px", //hide scrollbar
        overflowY: "auto",
        boxShadow: "0 4px 6px 1px rgba(0,0,0,0.5)"
      }}
    >
      <Box
        style={{
          opacity: ".54",
          textAlign: "right",
          padding: "24px 24px 0 0"
        }}
      >
        <i data-eva="close-outline" data-eva-fill="#000" />
      </Box>
      <Heading
        sx={{
          fontSize: "36px",
          lineHeight: "49px",
          fontWeight: "600",
          padding: "0 0 82px 0"
        }}
      >
        Mood Board name
      </Heading>
      <Flex mx={16} sx={{ flexFlow: "row wrap" }}>
        <Box width={1 / 2} px={7.5} style={{ borderRadius: "10px" }}>
          <BlurredImage src={src} />
        </Box>
        <Box
          width={1 / 2}
          px={7.5}
          sx={{
            borderRadius: "10px",
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
        <Box>
          <Image src={src} sx={{ height: "100px" }} />
        </Box>

        {colorArr.map(color => (
          <Swatch color={color} />
        ))}
      </Flex>
    </Box>
  );
};

export default SlidePanel;
