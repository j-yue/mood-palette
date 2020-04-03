import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import { Flex, Box } from "rebass";

import { GlobalProvider } from "./context/globalContext";

import theme from "./themes/theme";
import Header from "./components/header";
import Workspace from "./components/workspace";
import SlidePanel from "./components/slidePanel";

let state = {
  slidePanel: "images/feathers.jpg",
  images: [
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg",
    "images/feathers.jpg"
  ],

  colors: [
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"],
    ["#000", "#888", "#000"]
  ],

  moods: [
    [
      "images/hahns.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg"
    ],
    ["images/feathers.jpg", "images/feathers.jpg", "images/feathers.jpg"],
    ["images/feathers.jpg", "images/feathers.jpg"],
    ["images/hahns.jpg"],
    [
      "images/hahns.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/hahns.jpg"
    ],
    [
      "images/hahns.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/hahns.jpg"
    ],
    [
      "images/hahns.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg"
    ],
    [
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg"
    ],
    [
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/blueAndGold.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg",
      "images/feathers.jpg"
    ]
  ]
};

const App = () => {
  const [slidePanel, setSlidePanel] = useState(null);
  const [uploadedImages, setUploadedImages] = useState(null);
  const [moods, setMoods] = useState({});
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const [showSuggestions, setShowSuggestions] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Flex className="App" onClick={() => setShowSuggestions(false)}>
        <GlobalProvider
          value={{
            slidePanel,
            setSlidePanel,
            uploadedImages,
            setUploadedImages,
            moods,
            setMoods,
            search,
            setSearch,
            searchResults,
            setSearchResults,
            showSuggestions,
            setShowSuggestions
          }}
        >
          <Box bg="white" width="100%">
            {slidePanel && (
              <SlidePanel data={slidePanel} setSlidePanel={setSlidePanel} />
            )}
            <Header />

            <Workspace
              moods={state.moods}
              uploadedImages={uploadedImages}
              searchResults={searchResults}
              search={search}
            />
          </Box>
        </GlobalProvider>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
