import React, { useEffect } from "react";
import { Flex, Heading } from "rebass";
import * as eva from "eva-icons";
import TileList from "./tileList";

const Mood = ({ name, images, colors }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <React.Fragment>
      <Heading>{name}</Heading>
      <Flex sx={{ alignItems: "center" }}>
        <i data-eva="arrow-left" />
        <div style={{ width: "80%" }}>
          <TileList images={images} colors={colors} />
        </div>
        <i data-eva="arrow-right" />
      </Flex>
    </React.Fragment>
  );
};

export default Mood;
