import React from "react";
// import * as eva from "eva-icons";
import { Flex } from "rebass";
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
      sx={{ borderRadius: "10px", textTransform: "uppercase" }}
      onClick={() => copyToClipboard(color)}
    >
      <Icon
        name="clipboard-outline"
        data-eva-fill="#fff"
        data-eva-width="1.5rem"
        data-eva-height="1.5rem"
        style={{ marginRight: "1rem" }}
      />
      {color}
    </Flex>
  );
};

export default Swatch;
