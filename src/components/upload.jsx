import React from "react";
import { Label, Input } from "@rebass/forms";
import { Box, Flex, Button } from "rebass";

const Upload = () => {
  return (
    <Flex
      width="40%"
      height="9rem"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="space-evenly"
      color="upload"
      fontSize="1.5rem"
      lineHeight="1.75rem"
      sx={{ border: "4px dashed #979797" }}
    >
      <Input
        id="upload"
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        display="none"
      />
      Upload photo(s)
      <Button bg="upload" p="1rem" sx={{ borderRadius: "0" }}>
        <Label htmlFor="upload">Upload</Label>
      </Button>
    </Flex>
  );
};

export default Upload;
