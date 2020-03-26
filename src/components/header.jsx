import React from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Flex variant="header">
      <Logo />
      <Flex variant="headerActions">
        <SearchBar />
        <Heading variant="or">or</Heading>
        <Upload />
      </Flex>
    </Flex>
  );
};

export default Header;
