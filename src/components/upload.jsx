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
      <Button variant="uploadButton">
        <Label htmlFor="upload" variant="uploadLabel">
          Upload photo(s)
        </Label>
      </Button>
    </Flex>
  );
};

export default Upload;
