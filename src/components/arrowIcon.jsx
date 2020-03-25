// component based on Icon component
import React from "react";
import Icon from "./icon";

const ArrowIcon = ({ name }) => {
  return (
    <Icon
      name={name}
      data-eva-fill="#D8D8D8"
      data-eva-width="3.5rem"
      data-eva-height="3.5rem"
      data-eva-animation="pulse"
    />
  );
};

export default ArrowIcon;
