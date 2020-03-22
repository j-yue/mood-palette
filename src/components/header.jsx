import React from "react";
import { Box } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Box>
      <Logo />
      <SearchBar />
      <Upload />
    </Box>
  );
};

export default Header;
