import React from "react";
import { Box, Flex } from "rebass";

const calcHeight = length => {
  if (length === 0) return 0;
  if (length <= 5) return length;
  return 5;
};

const Suggestions = ({ ...props }) => {
  const { suggestions, setShowSuggestions, setGlobalSearch, setSearch } = props;
  let count = 0;
  return (
    <Box
      sx={{
        zIndex: "100",
        position: "relative",
        border: "1px solid #8A8A8A",
        borderRadius: "4px",
        bg: "#2F2F2F;",
        color: "white",
        // top: "3rem",
        // mt: "1rem",
        display: suggestions.length > 0 ? "block" : "none",
        maxHeight: `calc(2rem * ${calcHeight(suggestions.length)})`
      }}
    >
      <Flex
        sx={{
          // display: suggestions.length > 0 ? "block" : "none",
          // border: "1px solid #8A8A8A",
          // borderRadius: "4px",
          // bg: "#2F2F2F;",
          // color: "white",
          overflowY: "auto",
          maxHeight: "inherit",
          flexFlow: "row wrap",
          alignItems: "flex-start"
        }}
      >
        {suggestions.map(word => (
          <Box
            minWidth="100%"
            key={count++}
            sx={{
              px: ".5rem",
              fontSize: "1rem",
              minHeight: "2rem",
              lineHeight: "1.5rem",
              "&:hover": {
                bg: "blue"
              }
            }}
            onClick={() => {
              setSearch(word);
              setGlobalSearch(word);
              // setSearch(word);
              setShowSuggestions(false);
            }}
          >
            {word}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Suggestions;
