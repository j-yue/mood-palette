import React from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = ({ setSlidePanel }) => {
  return (
    <Flex variant="header" onClick={() => setSlidePanel(null)}>
      <Logo />
      <Flex variant="headerActions">
        <Box sx={{ width: "50%" }}>
          <SearchBar />
        </Box>
        <Heading variant="or">or</Heading>
        <Upload />
      </Flex>
    </Flex>
  );
};

export default Header;
