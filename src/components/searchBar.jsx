import React, { useContext, useState, useEffect } from "react";
import { Flex, Button } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";
import Suggestions from "./suggestions";

import {
  handleChange,
  handleKeyPress,
  handleGlobalSearchChange,
} from "./utils/searchBar";
import { GlobalContext } from "../context/globalContext";

const SearchBar = () => {
  const [search, setSearch] = useState(""); //keep track of search string
  const [isFocused, setIsFocused] = useState(false); //toggle colors

  //context
  const {
    search: globalSearch,
    setSearch: setGlobalSearch,
    showSuggestions,
    setShowSuggestions,
    setSearchResults,
  } = useContext(GlobalContext);

  const [suggestions, setSuggestions] = useState([]);

  //the moment the global search state is changed, hide suggestions and fetch results
  useEffect(() => {
    handleGlobalSearchChange(
      setSuggestions,
      setSearch,
      globalSearch,
      setSearchResults,
      setGlobalSearch,
      search.length === 0
    );
  }, [globalSearch]);

  return (
    <Flex
      variant="searchBar"
      //keep track of whether or not user clicked outside search bar
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Flex
        width="100%"
        height="3rem"
        minHeight="3rem"
        sx={{
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          borderColor: "secondary",
        }}
      >
        <Input
          type="search"
          value={search}
          placeholder="search for a color mood"
          onChange={(e) =>
            handleChange(
              e.target.value,
              setSearch,
              setSuggestions,
              setShowSuggestions,
              setGlobalSearch
            )
          }
          onKeyPress={(e) => handleKeyPress(e, setGlobalSearch)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          sx={{
            px: ".5rem",
            border: "1px solid inherit",
            borderColor: "secondary",
            borderTopLeftRadius: "buttonRadius",
            borderBottomLeftRadius: "buttonRadius",
            width: "100%",
            "&:focus": {
              outline: "none",
              borderColor: "focused",
            },
          }}
        />

        <Button
          onClick={() => setGlobalSearch(search)}
          variant="primary"
          sx={{
            minWidth: "buttonH",
            bg: isFocused ? "focused" : "secondary",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <Icon name="search" />
        </Button>
      </Flex>

      {showSuggestions && (
        <Suggestions
          suggestions={suggestions}
          setShowSuggestions={setShowSuggestions}
          setGlobalSearch={setGlobalSearch}
          setSearch={setSearch}
        />
      )}
    </Flex>
  );
};

export default SearchBar;
