import React, { useEffect } from "react";
import * as eva from "eva-icons";
import { Box } from "rebass";

const Swatch = ({ color }) => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <Box sx={{ width: "100%", color: "white", background: color }}>
      <i data-eva="clipboard-outline" data-eva-fill="#fff" />
      {color}
    </Box>
  );
};

export default Swatch;
