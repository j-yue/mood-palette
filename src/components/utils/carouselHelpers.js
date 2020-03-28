//helper functions for Carousel component to implement funcionality

//return index of first image in the last row
const setLast = arrLength => {
  //if length <= 3, the first img is always the first in last row
  if (arrLength <= 3) return 0;

  const remainder = arrLength % 3;

  //last image is last in row, so first img is third to last
  if (remainder === 0) return arrLength - 3;

  //...second to last
  if (remainder === 1) return arrLength - 2;

  //...last one
  return arrLength - 1;
};

//arrow  is either 'left' or 'right'
//show left arrow as long as not on first row
//show right arrow as long as not on last row
const showArrow = (arrow, current, last) => {
  const isLastRow = current === last;
  const isLeft = arrow === "left";

  if (isLeft) {
    if (current === 0) return "none";
    return "inline";
  }

  //right arrow
  if (!isLastRow) return "inline";

  //last row and right arrow
  return "none";
};

export { setLast, showArrow };
