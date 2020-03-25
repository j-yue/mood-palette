import React from "react";
import { Flex } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";

const SearchBar = () => {
  return (
    <Flex variant="searchBar">
      <Icon name="search" />
      <Input
        type="search"
        placeholder="Search for a color mood"
        variant="searchBar"
      />
    </Flex>
  );
};

export default SearchBar;
