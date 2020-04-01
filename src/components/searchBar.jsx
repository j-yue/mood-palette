import React, { useContext, useState, useEffect } from "react";
import { Flex, Button, Box } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";
import Suggestions from "./suggestions";

import { getSuggestions } from "./utils/searchBar";
import { GlobalContext } from "../context/globalContext";

const SearchBar = ({ showSuggestions, setShowSuggestions }) => {
  //keep track of search string
  const [search, setSearch] = useState("");
  const { search: globalSearch, setSearch: setGlobalSearch } = useContext(
    GlobalContext
  );

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setSuggestions([]);
    setSearch(globalSearch);
  }, [globalSearch]);

  return (
    <Flex
      variant="searchBar"
      onClick={e => {
        e.stopPropagation();
      }}
      height="3rem"
    >
      <Flex width="100%" height="3rem" minHeight="3rem">
        <Input
          type="search"
          px=".5rem"
          value={search}
          placeholder="search for a color mood"
          onChange={e => {
            setSearch(e.target.value);
            setSuggestions(getSuggestions(e.target.value));
            setShowSuggestions(true);
          }}
          sx={{
            border: "none"
          }}
        />
        <Button variant="searchButton">
          <Icon name="search" onClick={e => e.preventDefault()} />
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
