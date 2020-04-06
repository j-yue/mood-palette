import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import { Flex, Box } from "rebass";

import { GlobalProvider } from "./context/globalContext";

import theme from "./themes/theme";
import Header from "./components/header";
import Workspace from "./components/workspace";
import SlidePanel from "./components/slidePanel";

const App = () => {
  const [slidePanel, setSlidePanel] = useState(null);
  const [uploadedImages, setUploadedImages] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Flex
        className="App"
        onClick={() => {
          setShowSuggestions(false);
          setSlidePanel(null);
        }}
      >
        <GlobalProvider
          value={{
            slidePanel,
            setSlidePanel,
            uploadedImages,
            setUploadedImages,
            search,
            setSearch,
            searchResults,
            setSearchResults,
            showSuggestions,
            setShowSuggestions,
            searchHistory,
            setSearchHistory,
          }}
        >
          <Box bg="white" width="100%">
            {slidePanel && (
              <SlidePanel data={slidePanel} setSlidePanel={setSlidePanel} />
            )}
            <Header setSlidePanel={setSlidePanel} />

            <Workspace
              uploadedImages={uploadedImages}
              searchResults={searchResults}
              search={search}
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
            />
          </Box>
        </GlobalProvider>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
