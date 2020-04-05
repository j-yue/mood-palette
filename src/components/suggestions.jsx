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
        zIndex: "200",
        borderRadius: "buttonRadius",
        border: isEmpty ? "none" : "1px solid #8A8A8A",
        bg: "#2F2F2F",
      }}
    >
      <Flex
        sx={{
          width: "100%",
          flexFlow: "row wrap",
          overflowY: "auto",
          borderRadius: "buttonRadius",
          maxHeight: `calc(2rem*${calcHeight(suggestions.length)})`,
        }}
      >
        {suggestions &&
          suggestions.map((word) => (
            <Box
              variant="center"
              sx={{
                display: "flex",
                width: "100%",
                pl: ".5rem",
                fontSize: "1.25rem",
                lineHeight: "2rem",
                "&:hover": {
                  bg: "focused",
                  color: "#0C0C0C",
                },
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
