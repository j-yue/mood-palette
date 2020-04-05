import React from "react";
import Carousel from "./carousel";

const SearchHistory = ({ history }) => {
  const name = history.search;
  const images = history.results.map(img => img.src);
  return <Carousel images={images} name={name} />;
};

export default SearchHistory;
