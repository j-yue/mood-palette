import React from "react";
import SlidePanel from "./slidePanel";
import Mood from "./mood";

const Workspace = ({ slidePanel, images, colors, moods }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* <SlidePanel src={slidePanel} style={{ position: "fixed" }} /> */}
      <div
        style={{
          paddingTop: "30vh"
        }}
      >
        <Mood name="wild west" images={images} colors={colors} />
        {moods.map(mood => (
          <Mood name="Mood" images={mood} colors={colors} />
        ))}
      </div>
    </div>
  );
};

export default Workspace;
