import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import { Flex, Box } from "rebass";

import { GlobalProvider } from "./context/globalContext";

import theme from "./themes/theme";
import Header from "./components/header";
import Workspace from "./components/workspace";
import SlidePanel from "./components/slidePanel";
// import SearchResults from "./components/searchResults";

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
  const [search, setSearch] = useState(null);
  // const [searchHistory, setSearchHistory] = useState([]);
  return (
    <Flex className="App">
      <ThemeProvider theme={theme}>
        <GlobalProvider
          value={{
            slidePanel,
            setSlidePanel,
            uploadedImages,
            setUploadedImages,
            moods,
            setMoods,
            search,
            setSearch
          }}
        >
          <Box bg="white" width="100%">
            {slidePanel && (
              <SlidePanel data={slidePanel} setSlidePanel={setSlidePanel} />
            )}
            <Header />

            {!search && (
              <Workspace moods={state.moods} uploadedImages={uploadedImages} />
            )}
            {/* {search && <SearchResults />} */}
          </Box>
        </GlobalProvider>
      </ThemeProvider>
    </Flex>
  );
};

export default App;
