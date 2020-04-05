import React from "react";
import { Link as RebassLink } from "rebass";

const Link = ({ href, text }) => {
  return (
    <RebassLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="black"
    >
      {text}
    </RebassLink>
  );
};

export default Link;
