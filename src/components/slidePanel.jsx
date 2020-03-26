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

  const [colorArr] = useState(colors);

  //generate unique key
  let count = 0;

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
        overflowY: "scroll",
        boxShadow: "0 4px 6px 1px rgba(0,0,0,0.5)",
        display: "none"
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
        as="h2"
        sx={{
          fontSize: "36px",
          lineHeight: "49px",
          fontWeight: "600",
          padding: "0 0 52px 0"
        }}
      >
        Mood Board name
      </Heading>
      <Flex mx={16} sx={{ flexFlow: "row wrap" }}>
        <Box width={1 / 2} pr={7.5}>
          <BlurredImage src={src} />
        </Box>
        <Box
          width={1 / 2}
          pl={7.5}
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
        <Box my={16}>
          <Image src={src} style={{ borderRadius: "10px" }} />
        </Box>
        <Box width="100%" sx={{ marginTop: "-16px" }}>
          {colorArr.map(color => (
            <Swatch color={color} key={count++} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default SlidePanel;
