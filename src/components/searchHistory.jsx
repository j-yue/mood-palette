import React from "react";
import Carousel from "./carousel";

const SearchHistory = ({ history }) => {
  const name = history.search;
  return <Carousel data={history.results} name={name} />;
};

export default SearchHistory;
