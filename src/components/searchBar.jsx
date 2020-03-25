import React, { useEffect } from "react";
import { Flex } from "rebass";
import { Input } from "@rebass/forms";
import * as eva from "eva-icons";

const SearchBar = () => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <Flex
      alignItems="center"
      width="50%"
      height="3.5rem"
      color="placeholder"
      fontSize="1rem"
      lineHeight="1.5rem"
      bg="secondary"
      px="1.5rem"
      sx={{
        border: "1px solid #000",
        borderRadius: "2.5rem"
      }}
    >
      <i data-eva="search" />
      <Input
        type="search"
        placeholder="Search for a color mood"
        sx={{
          border: "none"
        }}
      />
    </Flex>
  );
};

export default SearchBar;
