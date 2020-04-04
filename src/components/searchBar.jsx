import React, { useContext, useState, useEffect } from "react";
import { Flex, Button } from "rebass";
import { Input } from "@rebass/forms";
import Icon from "./icon";
import Suggestions from "./suggestions";

import { getSuggestions } from "./utils/searchBar";
import { GlobalContext } from "../context/globalContext";

const filterResults = results => {
  let images = [];
  console.log(results.length);
  if (results.length === 0) return [];
  for (let imgObj of results) {
    const { urls, links, user } = imgObj;
    images.push({
      src: urls.small,
      download: links.download_location,
      name: user.name,
      link: user.links.html
    });
  }
  return images;
};

const SearchBar = () => {
  //keep track of search string
  const [search, setSearch] = useState("");
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
      height="3rem"
    >
      <Flex width="100%" height="3rem" minHeight="3rem">
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
          sx={{
            border: "none"
          }}
        />
        <Button
          variant="primary"
          sx={{
            minWidth: "buttonH",
            alignSelf: "flex-end",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
            // borderRadius: "0 buttonRadius buttonRadius 0
          }}
          // variant="searchButton"
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
