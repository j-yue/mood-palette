import React, { useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Flex, Button } from "rebass";
import { GlobalContext } from "../context/globalContext";
import handleChange from "./utils/upload";

const Upload = () => {
  const { uploadedImages, setUploadedImages, setSearch } = useContext(
    GlobalContext
  );

  return (
    <Flex width="20%">
      <Input
        id="upload"
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        display="none"
        onChange={(e) =>
          handleChange(
            e.target.files,
            uploadedImages,
            setUploadedImages,
            setSearch
          )
        }
      />
      <Button variant="primary" py=".5rem" px="1rem" width="100%">
        <Label htmlFor="upload " width="fit-content">
          Upload photo(s)
        </Label>
      </Button>
    </Flex>
  );
};

export default Upload;
