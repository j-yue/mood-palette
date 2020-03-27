import React, { useState } from "react";
import { Box, Flex } from "rebass";
import Tile from "./tile";
import ArrowIcon from "./arrowIcon";

//component displays 3 full images and part of the next image at one time

//return index of first image in the last row
const setLast = arrLength => {
  const remainder = arrLength % 3;

  //last image is last in row, so first img is third to last
  if (remainder === 0) return arrLength - 3;

  //...second to last
  if (remainder === 1) return arrLength - 2;

  //...last one
  return arrLength - 1;
};

//images is an array of image srcs
const Carousel = ({ images }) => {
  //current keeps track of the index of the first img shown in the list
  const [current, setCurrent] = useState(0);

  //current row
  const [row, setRow] = useState(images.slice(0, 3));

  //first image of next row
  const [preview, setPreview] = useState(images[current + 3]);

  //index of the first img in the last row
  const last = setLast(images.length);
  //conditions
  //when current === last carousel is on the last row

  //unique key
  let count = 0;

  return (
    <Flex variant="carouselWrapper">
      <Box variant="arrowIcon">
        <ArrowIcon name="arrow-left" />
      </Box>
      <Flex variant="carousel">
        {row.map(src => (
          <Tile
            src={src}
            colors={["#123456", "#aff", "#444000"]}
            key={count++}
          />
        ))}
      </Flex>

      <Box variant="arrowIcon">
        <ArrowIcon name="arrow-right" />
      </Box>
    </Flex>
  );
};

export default Carousel;
