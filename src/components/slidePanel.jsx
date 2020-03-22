import React from "react";

const SlidePanel = ({ src }) => {
  return (
    <div
      style={{
        width: "30%",
        height: "70vh",
        background: "#aaa",
        position: "fixed",
        bottom: "0",
        right: "0"
      }}
    >
      <h2>SlidePanel</h2>
      <p>images</p>
      <p>images</p>
      <p>images</p>
    </div>
  );
};

export default SlidePanel;
