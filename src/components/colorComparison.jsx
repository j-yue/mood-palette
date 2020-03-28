import React from "react";
import { Flex } from "rebass";
import RoundColor from "./roundColor";

const ColorComparison = ({ colors }) => {
  const [c1, c2, c3] = colors;
  return (
    <Flex bg={c1} variant="colorComparison">
      <RoundColor color={c2} />
      <RoundColor color={c3} />
    </Flex>
  );
};

export default ColorComparison;
