import React from "react";
import { Box, Image, Flex, Heading, Link } from "rebass";
import Swatch from "./swatch";
import ColorComparison from "./colorComparison";
import Icon from "./icon";

const SlidePanel = ({ data, setSlidePanel }) => {
  const { src, palette, name, credits, link } = data;
  let count = 0;
  console.log(link);

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
        {credits && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "black",
              textAlign: "center",
              minWidth: "100%",
              pt: "1rem"
            }}
          >
            {credits}
          </Link>
        )}
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
