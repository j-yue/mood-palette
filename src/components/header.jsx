import React from "react";
import { Box, Flex } from "rebass";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Upload from "./upload";

const Header = () => {
  return (
    <Box
      style={{
        // height: "317px",
        height: "30vh",
        position: "fixed",
        width: "100%",
        background: "#1B1B1B"
      }}
    >
      <Flex sx={{ flexFlow: "column wrap", height: "100%" }}>
        <Logo />
        <Box sx={{ width: "100%" }}>
          <Flex sx={{ justifyContent: "space-around", alignItems: "center" }}>
            <SearchBar />
            <span
              style={{ fontWeight: "bold", color: "#fff", fontSize: "2rem" }}
            >
              OR
            </span>
            <Upload />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
