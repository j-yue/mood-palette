import React from "react";
import { Text } from "rebass";
import Link from "./link";

const Credits = ({ link, name }) => {
  return (
    <Text variant="credits">
      {"Photo by "}
      <Link href={link} text={name} />
      {" on "}
      <Link href="https://unsplash.com/" text="Unsplash" />
    </Text>
  );
};

export default Credits;
