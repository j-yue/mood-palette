import React from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Box bg="#1B1B1B" px={135} py={32}>
      <Flex sx={{ flexFlow: "column wrap", height: "100%" }}>
        <Logo />
        <Box sx={{ width: "100%" }}>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <SearchBar />
            <Heading
              sx={{ width: "10%", textTransform: "uppercase", color: "white" }}
            >
              or
            </Heading>
            <Upload />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
