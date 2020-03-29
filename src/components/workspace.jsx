import React from "react";
import { Flex } from "rebass";
import Mood from "./mood";
import Carousel from "./carousel";
import UploadedImages from "./uploadedImages";

const Workspace = ({ uploadedImages, moods }) => {
  //generate unique key
  let count = 0;
  return (
    <Flex variant="workspace">
      {uploadedImages && (
        <Mood
          name="Uploaded Images"
          images={uploadedImages}
          Component={UploadedImages}
          variant="moodUploaded"
        />
      )}
      {moods.map(mood => (
        <Mood
          name="Mood"
          key={count++}
          images={mood}
          Component={Carousel}
          variant="mood"
        />
      ))}
    </Flex>
  );
};

export default Workspace;
