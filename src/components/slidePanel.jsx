import React, { useState, useContext } from "react";
import { Box, Image, Flex, Heading } from "rebass";
import Swatch from "./swatch";
import ColorComparison from "./colorComparison";
import Icon from "./icon";

const SlidePanel = ({ data, setSlidePanel }) => {
  const { src, palette, name } = data;

  //generate unique key
  let count = 0;

  return (
    <Flex variant="slidePanel" bg="white">
      <Box variant="closeIcon" onClick={() => setSlidePanel(null)}>
        <Icon name="close-outline" />
      </Box>

      <Heading
        variant="moodHeader"
        sx={{
          textAlign: "center",
          my: "2rem",
          p: "0"
        }}
      >
        {name}
      </Heading>

      {/* images */}
      <Flex variant="slidePanelImageWrapper">
        <Image src={src} variant="slidePanelBlurredImage" />
        <ColorComparison colors={palette} />
        <Image src={src} variant="slidePanelImage" />

        {/* swatches */}
        <Box width="100%">
          {palette.map(color => (
            <Swatch color={color} key={count++} />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SlidePanel;
