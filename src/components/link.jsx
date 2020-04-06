import React from "react";
import { Link as RebassLink } from "rebass";

const Link = ({ href, text }) => {
  return (
    <RebassLink
      href={href + "?utm_source=mood_colors&utm_medium=referral"}
      target="_blank"
      rel="noopener noreferrer"
      color="black"
    >
      {text}
    </RebassLink>
  );
};

export default Link;
