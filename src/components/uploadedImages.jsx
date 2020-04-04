import React, { useContext } from "react";
import { Box, Flex } from "rebass";
import Tile from "./tile";
import withHeading from "./hoc/withHeading";
import { GlobalContext } from "../context/globalContext";

const UploadedImages = () => {
  const name = "Uploaded Images";
  const { uploadedImages } = useContext(GlobalContext);

  //generate key
  let count = 0;
  return (
    <Flex
      sx={{
        px: "3.5rem",
        flexFlow: "row wrap",
        justifyContent: "space-between"
      }}
    >
      {uploadedImages.map(image => (
        <Tile src={image} name={name} key={count++} m="0" mb="2rem" />
      ))}
    </Flex>
  );
};

export default withHeading(
  UploadedImages,
  "moodUploaded",
  "header",
  "Uploaded Images"
);
