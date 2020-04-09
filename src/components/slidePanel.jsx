import React, { useEffect, useState } from "react";
import { Box, Image, Flex, Heading } from "rebass";
import Swatch from "./swatch";
import ColorComparison from "./colorComparison";
import Icon from "./icon";
import Credits from "./credits";

const SlidePanel = ({ data, setSlidePanel }) => {
  const { src, palette, name, credits, link } = data;
  let count = 0;

  const [showSwatches, setShowSwatches] = useState(true);

  //force swatches to rerender
  useEffect(() => {
    setShowSwatches(false);
    setTimeout(() => setShowSwatches(true), 1);
  }, [data]);

  return (
    <Flex
      variant="slidePanel"
      onClick={(e) => e.stopPropagation()}
      className="slidepanel"
    >
      {/* close button */}
      <Box className="inner" sx={{ width: "50vw", overflowY: "scroll" }}>
        <Box
          className="element"
          sx={{
            maxWidth: "33vw",
            p: "1rem",
          }}
        >
          <Box variant="closeIcon" onClick={() => setSlidePanel(null)}>
            <Icon name="close-outline" />
          </Box>

          {/* heading */}
          <Heading
            variant="header"
            sx={{
              textAlign: "center",
              my: "2rem",
              p: "0",
            }}
          >
            {name}
          </Heading>

          {/* images */}
          <Flex sx={{ flexFlow: "row wrap" }}>
            <Flex
              sx={{
                flexFlow: "row nowrap",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
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
                mt: "1rem",
                minWidth: "100%",
              }}
            />

            {/* credits if unsplash photo */}
            {credits && <Credits link={link} name={credits} />}

            {/* swatches */}
            <Box width="100%">
              {showSwatches &&
                palette.map((color) => <Swatch color={color} key={count++} />)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SlidePanel;
