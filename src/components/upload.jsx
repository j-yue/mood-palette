import React, { useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Flex, Button } from "rebass";
import { GlobalContext } from "../context/globalContext";

//check if the uploaded img is has jpg, jpeg, or png extension
const hasValidExtension = img => {
  const extension = img.split(".")[1];
  if (extension === "jpg" || extension === "jpeg" || extension === "png")
    return true;
  return false;
};

const handleChange = (files, uploadedImages, setUploadedImages) => {
  let images = [];
  for (let file of files) {
    if (!hasValidExtension(file.name)) break;
    images.push(URL.createObjectURL(file));
  }
  const result = uploadedImages ? [...images, ...uploadedImages] : [...images];
  setUploadedImages(result);
};

const Upload = () => {
  const { uploadedImages, setUploadedImages } = useContext(GlobalContext);

  return (
    <Flex variant="upload">
      <Input
        id="upload"
        type="file"
        multiple
        accept=".png, .jpg, .jpeg"
        display="none"
        onChange={e =>
          handleChange(e.target.files, uploadedImages, setUploadedImages)
        }
      />
      <Button variant="primary" py=".5rem" px="1rem">
        <Label htmlFor="upload">Upload photo(s)</Label>
      </Button>
    </Flex>
  );
};

export default Upload;
