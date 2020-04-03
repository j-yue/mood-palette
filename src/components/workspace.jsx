import React from "react";
import { Flex } from "rebass";
import Carousel from "./carousel";
import UploadedImages from "./uploadedImages";
import SearchResults from "./searchResults";

const Workspace = ({ uploadedImages, moods, searchResults, search }) => {
  //generate unique key
  let count = 0;
  return (
    <Flex variant="workspace">
      {/* if user made a search, show results */}
      {search && <SearchResults />}
      {/* otherwise display any uploaded images and moods */}
      {!search && uploadedImages && <UploadedImages />}
      {!search &&
        moods.map(mood => (
          <Carousel images={mood} name="carousel" key={count++} />
        ))}
    </Flex>
  );
};

export default Workspace;
