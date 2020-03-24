import React, { useEffect } from "react";
import { Box } from "rebass";
import { Input } from "@rebass/forms";
import * as eva from "eva-icons";

const SearchBar = () => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <Box
      sx={{
        border: "1px solid #000",
        height: "55px",
        color: "#C2C2C2",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: "41px",
        paddingLeft: "21px",
        background: "#fff"
      }}
    >
      <i data-eva="search" data-eva-height="20" data-eva-width="28" />
      <Input
        type="search"
        placeholder="Search for a color mood"
        style={{
          border: "none"
        }}
      />
    </Box>
  );
};

export default SearchBar;
