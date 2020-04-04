import React from "react";
import { Box, Flex } from "rebass";
import { calcHeight, handleClick } from "./utils/suggestionHelpers";

const Suggestions = ({ ...props }) => {
  const { suggestions, setShowSuggestions, setGlobalSearch, setSearch } = props;
  let count = 0;
  const isEmpty = suggestions.length === 0;
  return (
    <Box
      sx={{
        borderRadius: "buttonRadius",
        border: isEmpty ? "none" : "1px solid #8A8A8A",
        bg: "#2F2F2F"
      }}
    >
      <Flex
        sx={{
          zIndex: "500",
          width: "100%",
          flexFlow: "row wrap",
          fontSize: "1.25rem",
          lineHeight: "2rem",
          overflowY: "auto",
          minHeight: isEmpty ? "0" : "2rem",
          maxHeight: `calc(2rem*${calcHeight(suggestions.length)})`
        }}
      >
        {suggestions &&
          suggestions.map(word => (
            <Box
              variant="center"
              sx={{
                display: "flex",
                width: "100%",
                pl: ".5rem",
                maxHeight: "1.75rem",
                "&:hover": {
                  bg: "rgba(255, 255, 255, .25)"
                }
              }}
              key={count++}
              onClick={() =>
                handleClick(
                  word,
                  setSearch,
                  setGlobalSearch,
                  setShowSuggestions
                )
              }
            >
              {word}
            </Box>
          ))}
      </Flex>
    </Box>
  );
};
export default Suggestions;
