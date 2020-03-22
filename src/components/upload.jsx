import React from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Button } from "rebass";

const Upload = () => {
  return (
    <Box
      sx={{
        border: "4px dashed #979797",
        padding: "1rem",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
      }}
    >
      <Input
        id="upload"
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        sx={{ display: "none" }}
      />
      upload photo(s)
      <Button sx={{ background: "#979797" }}>
        <Label htmlFor="upload">Upload</Label>
      </Button>
    </Box>
  );
};

export default Upload;
