import React, { useState, useEffect } from "react";
import { Flex, Box } from "rebass";
import Icon from "./icon";

const copyToClipboard = color => {
  const copyText = document.createElement("textarea");
  document.body.appendChild(copyText);
  copyText.value = color;
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
};

const Swatch = ({ color }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (showTooltip) {
      setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    }
  }, [showTooltip]);
  return (
    <Flex
      width="100%"
      bg={color}
      my="16px"
      height="85px"
      maxHeight="85px"
      alignItems="center"
      justifyContent="center"
      fontSize="24px"
      lineHeight="33px"
      color="#fff"
      sx={{
        position: "relative",
        borderRadius: "10px",
        textTransform: "uppercase"
      }}
      onClick={() => {
        copyToClipboard(color);
        setShowTooltip(true);
      }}
    >
      {showTooltip && <Box>Copied!</Box>}
      {!showTooltip && (
        <Box>
          <Icon
            name="clipboard-outline"
            data-eva-fill="#fff"
            data-eva-width="1.5rem"
            data-eva-height="1.5rem"
            style={{ marginRight: "1rem" }}
          />
          {color}
        </Box>
      )}
    </Flex>
  );
};

export default Swatch;
