import React from "react";
import { Flex, Button } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";

const SearchBar = () => {
  return (
    <Flex variant="searchBar">
      <Input
        type="search"
        placeholder="search for a color mood"
        variant="searchInput"
      />
      <Button variant="searchButton" minWidth="3rem">
        <Icon
          name="search"
          // data-eva-width="1.5rem"
          // data-eva-height="1.5rem"
        />
      </Button>
    </Flex>
  );
};

export default SearchBar;
