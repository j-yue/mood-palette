import React from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Box bg="logo" px="8.5rem" py="2rem" height="18rem" width="100%">
      <Flex sx={{ flexFlow: "column wrap" }}>
        <Logo />
        <Flex width="100%" alignItems="center">
          <SearchBar />
          <Heading width="10%" color="secondary" fontSize="2.5rem" mx={3}>
            OR
          </Heading>
          <Upload />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
