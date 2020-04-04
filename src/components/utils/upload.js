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

export default handleChange;
