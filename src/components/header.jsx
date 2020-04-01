import React, { useState } from "react";
import { Box, Flex, Heading } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  return (
    <Flex variant="header" onClick={() => setShowSuggestions(false)}>
      <Logo />
      <Flex variant="headerActions">
        <Box sx={{ width: "40%" }}>
          <SearchBar
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
          />
        </Box>
        <Heading variant="or">or</Heading>
        <Upload />
      </Flex>
    </Flex>
  );
};

export default Header;
