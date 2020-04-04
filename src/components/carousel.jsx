import React, { useState, useEffect } from "react";
import { Box, Flex, Heading } from "rebass";
import Tile from "./tile";
import ArrowIcon from "./arrowIcon";
import { setLast, showArrow } from "./utils/carouselHelpers";
//component displays 3 full images and part of the next image at one time

//images is an array of image srcs
const Carousel = ({ images, name }) => {
  //current keeps track of the index of the first img shown in the list
  const [current, setCurrent] = useState(0);

  //current row
  const [row, setRow] = useState(images.slice(0, 3));

  //index of the first img in the last row
  const last = setLast(images.length);

  const [showLeftArrow, setShowLeftArrow] = useState(
    showArrow("left", current, last)
  );

  const [showRightArrow, setShowRightArrow] = useState(
    showArrow("right", current, last)
  );

  //unique key
  let count = 0;

  useEffect(() => {
    setRow(images.slice(current, current + 3));
    setShowLeftArrow(showArrow("left", current, last));
    setShowRightArrow(showArrow("right", current, last));
  }, [current]);

  return (
    <Box variant="mood">
      <Heading as="h2" variant="header">
        {name}
      </Heading>
      <Flex variant="carouselWrapper">
        <Box
          variant="arrowIcon"
          sx={{ display: showLeftArrow }}
          onClick={() => setCurrent(current - 2)}
        >
          <ArrowIcon name="arrow-left" />
        </Box>
        <Flex variant="carousel">
          {row.map(src => (
            <Tile src={src} key={count++} name={name} />
          ))}
        </Flex>

        <Box
          variant="arrowIcon"
          sx={{ display: showRightArrow }}
          onClick={() => setCurrent(current + 2)}
        >
          <ArrowIcon name="arrow-right" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Carousel;
