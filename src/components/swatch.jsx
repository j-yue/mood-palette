import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { Flex, Box } from "rebass";

const Swatch = ({ color }) => {
  useEffect(() => {
    eva.replace();
  }, []);
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
    >
      <i
        data-eva="clipboard-outline"
        data-eva-fill="#fff"
        data-eva-width="24px"
        data-eva-height="24px"
        style={{ marginRight: "27px" }}
      />
      {color}
    </Flex>
  );
};

export default Swatch;
