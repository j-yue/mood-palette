import React, { useState } from "react";
import { Box, Image, Flex, Heading } from "rebass";
import BlurredImage from "./blurredImage";
import Swatch from "./swatch";
import ColorComparison from "./colorComparison";
import Icon from "./icon";

const SlidePanel = ({ src, name, colors }) => {
  const [colorArr] = useState(colors);

  //generate unique key
  let count = 0;

  return (
    <Flex variant="slidePanel">
      <Box variant="closeIcon">
        <Icon name="close-outline" />
      </Box>

      <Heading
        variant="moodHeader"
        sx={{
          textAlign: "center",
          my: "4rem",
          p: "0"
        }}
      >
        {name}
      </Heading>

      {/* images */}
      <Flex variant="slidePanelImageWrapper">
        <BlurredImage
          src={src}
          variant="slidePanelBlurredImage"
          initialBlur="6px"
        />
        <ColorComparison colors={colors} />
        <Image src={src} variant="slidePanelImage" />

        {/* swatches */}
        <Box width="100%">
          {colorArr.map(color => (
            <Swatch color={color} key={count++} />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SlidePanel;
