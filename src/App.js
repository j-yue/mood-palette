import React from "react";
import { ThemeProvider } from "theme-ui";
import { Flex, Box } from "rebass";
// import "./App.css";

import theme from "./themes/theme";
import theme2 from "./themes/theme2";
import Header from "./components/header";
import Workspace from "./components/workspace";

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
    [
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
    [
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
    [
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
    [
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
    [
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
    [
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
    [
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
    [
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
    ]
  ]
};

function App() {
  return (
    <Flex
      className="App"
      // width="100%"
      // height="100%"
    >
      <ThemeProvider theme={theme2}>
        <Box>
          <Header />
          <Workspace
            slidePanel={state.slidePanel}
            images={state.images}
            colors={state.colors}
            moods={state.moods}
          />
        </Box>
      </ThemeProvider>
    </Flex>
    // {/* </Box> */}
    // {/* </div> */}
  );
}

export default App;
