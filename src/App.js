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
  const [uploadedImages, setUploadedImages] = useState([]);
  const [moods, setMoods] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);
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
            searchHistory,
            setSearchHistory
          }}
        >
          <Box bg="white">
            {slidePanel && (
              <SlidePanel data={slidePanel} setSlidePanel={setSlidePanel} />
            )}
            <Header />
            <Workspace
              slidePanel={state.slidePanel}
              images={state.images}
              colors={state.colors}
              moods={state.moods}
            />
          </Box>
        </GlobalProvider>
      </ThemeProvider>
    </Flex>
  );
};

export default App;
