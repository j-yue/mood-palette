import React from "react";
import { Label, Input } from "@rebass/forms";
import { Flex, Button } from "rebass";

const Upload = () => {
  return (
    <Flex variant="upload">
      <Input
        id="upload"
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        display="none"
      />
      Upload photo(s)
      <Button variant="upload">
        <Label htmlFor="upload">Upload</Label>
      </Button>
    </Flex>
  );
};

export default Upload;
