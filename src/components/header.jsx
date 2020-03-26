import React from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Box variant="header">
      <Flex sx={{ flexWrap: "wrap" }}>
        <Logo />
        <Flex variant="flexCenter">
          <SearchBar />
          <Heading variant="or">OR</Heading>
          <Upload />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
