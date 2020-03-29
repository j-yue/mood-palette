import React, { useContext } from "react";
import { Label, Input } from "@rebass/forms";
import { Flex, Button } from "rebass";
import { GlobalContext } from "../context/globalContext";

const handleChange = (files, uploadedImages, setUploadedImages) => {
  const images = Object.values(files).map(file => URL.createObjectURL(file));
  // console.log(uploadedImages);
  // if (!uploadedImages) result = [...uploadedImages, ...result];
  // console.log(uploadedImages);
  // setUploadedImages([...uploadedImages, ...result]);
  // console.log(uploadedImages == true);
  // setUploadedImages(result);
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
      <Button variant="uploadButton">
        <Label htmlFor="upload" variant="uploadLabel">
          Upload photo(s)
        </Label>
      </Button>
    </Flex>
  );
};

export default Upload;
