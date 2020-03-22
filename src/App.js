import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Logo from "./components/logo";
import SearchBar from "./components/searchBar";
// import Color from "./components/color";
import Tile from "./components/tile";
import Mood from "./components/mood";
import Upload from "./components/upload";

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Upload />
      <Tile src="images/feathers.jpg" colors={["#000", "#888", "#000"]} />

      <div>
        workspace
        <Mood
          images={[
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
          ]}
          colors={[
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
          ]}
        />
        <p>mood 2</p>
        <p>mood 3</p>
      </div>
    </div>
  );
}

export default App;
