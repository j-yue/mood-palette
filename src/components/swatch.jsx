import React, { useState, useEffect } from "react";
import { Flex, Box } from "rebass";
import { hex } from "wcag-contrast";
import Icon from "./icon";
import handleClick from "./utils/swatch";

const Swatch = ({ color }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const contrast = hex("#ffffff", color); //color contrast ratio
  const fontColor = contrast < 2 ? "black" : "white"; //for light backgrounds, use darker color

  useEffect(() => {
    //display a message whenever user clicks on component for .5s
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 500);
    }
  }, [showTooltip]);

  useEffect(() => {
    console.log("swatch mounted");
    return () => console.log("swatch will unmount");
  }, []);
  return (
    <Flex
      sx={{
        position: "relative",
        borderRadius: ".75rem",
        textTransform: "uppercase",
        bg: color,
        my: "1rem",
        height: "5.5rem",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        lineHeight: "2rem",
        color: fontColor,
      }}
      onClick={() => handleClick(color, setShowTooltip)}
    >
      {showTooltip && <Box>Copied!</Box>}
      {!showTooltip && (
        <Flex variant="center">
          <Icon
            style={{ marginRight: "1rem" }}
            name="clipboard-outline"
            data-eva-fill={fontColor}
            data-eva-width="1.5rem"
            data-eva-height="1.5rem"
          />
          {color}
        </Flex>
      )}
    </Flex>
  );
};

export default Swatch;
