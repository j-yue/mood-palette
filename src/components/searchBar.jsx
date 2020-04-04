import React, { useContext, useState, useEffect } from "react";
import { Flex, Button } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";
import Suggestions from "./suggestions";

import { getSuggestions, filterResults } from "./utils/searchBar";
import { GlobalContext } from "../context/globalContext";

const SearchBar = () => {
  //keep track of search string
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const {
    search: globalSearch,
    setSearch: setGlobalSearch,
    showSuggestions,
    setShowSuggestions,
    setSearchResults
  } = useContext(GlobalContext);

  const KEY = process.env.REACT_APP_UNSPLASH_KEY;
  const ENDPT = `https://api.unsplash.com/search/photos?page=1&query=`;

  const [suggestions, setSuggestions] = useState([]);

  //the moment the global search state is changed, hide suggestions and fetch results
  useEffect(() => {
    setSuggestions([]);
    setSearch(globalSearch);
    fetch(ENDPT + globalSearch + `&client_id=${KEY}`)
      .then(res => res.json())
      .then(data => setSearchResults(filterResults(data.results)));
    if (search.length === 0) setGlobalSearch("");
  }, [globalSearch]);

  return (
    <Flex
      variant="searchBar"
      onClick={e => {
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
          borderColor: "secondary"
        }}
      >
        <Input
          type="search"
          px=".5rem"
          value={search}
          placeholder="Search Unsplash photos"
          onChange={e => {
            setSearch(e.target.value);
            setSuggestions(getSuggestions(e.target.value));
            setShowSuggestions(true);
            if (!e.target.value) setGlobalSearch([]);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") setGlobalSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          sx={{
            border: "1px solid inherit",
            borderColor: "secondary",
            borderTopLeftRadius: "buttonRadius",
            borderBottomLeftRadius: "buttonRadius",
            width: "100%",
            "&:focus": {
              outline: "none",
              borderColor: "focused"
            }
          }}
        />
        <Button
          variant="primary"
          sx={{
            minWidth: "buttonH",
            bg: isFocused ? "focused" : "secondary",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
          onClick={() => setGlobalSearch(search)}
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
