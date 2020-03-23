import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Workspace from "./components/workspace";
// import Upload from "./components/upload";

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
    <div className="App" style={{ minHeight: "1024px" }}>
      <Header style={{ position: "relative" }} />
      <Workspace
        slidePanel={state.slidePanel}
        images={state.images}
        colors={state.colors}
        moods={state.moods}
        // style={{ position: "relative" }}
      />
    </div>
  );
}

export default App;
