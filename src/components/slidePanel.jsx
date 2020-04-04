import React from "react";
import { Box, Image, Flex, Heading, Link } from "rebass";
import Swatch from "./swatch";
import ColorComparison from "./colorComparison";
import Icon from "./icon";

const SlidePanel = ({ data, setSlidePanel }) => {
  const { src, palette, name, credits, link } = data;
  let count = 0;

  return (
    <Flex variant="slidePanel">
      {/* close button */}
      <Box variant="closeIcon" onClick={() => setSlidePanel(null)}>
        <Icon name="close-outline" />
      </Box>

      {/* heading */}
      <Heading
        variant="header"
        sx={{
          textAlign: "center",
          my: "2rem",
          p: "0"
        }}
      >
        {name}
      </Heading>

      {/* images */}
      <Flex sx={{ flexFlow: "row wrap" }}>
        <Flex sx={{ flexFlow: "row nowrap", justifyContent: "space-between" }}>
          {/* blurred img */}
          <Image
            src={src}
            variant="slidePanelSmallImage"
            sx={{ filter: "blur(6px)" }}
          />
          <ColorComparison colors={palette} />
        </Flex>
        {/* full size img */}
        <Image
          src={src}
          sx={{
            borderRadius: "slidePanelRadius",
            mt: "1rem"
          }}
        />

        {/* credits if unsplash photo */}
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
