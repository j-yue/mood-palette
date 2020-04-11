import ColorThief from "colorthief";
import toHex from "./toHex";

//extract palette when image is loaded
const handleLoad = (img) => {
  const colorThief = new ColorThief();
  const palette = colorThief.getPalette(img, 3);
  return palette.map((rgb) => toHex(rgb));
};

//trigger download per unsplash api terms
const triggerDownload = (download) => {
  const parsedDownload = download.split("/");
  const id = parsedDownload[parsedDownload.length - 2];
  const url = "https://mood-colors-api.herokuapp.com/triggerDownload/" + id;
  fetch(url).then((res) => res);
};

//set slide panel and trigger download if unsplash image
const handleClick = (
  setSlidePanel,
  src,
  palette,
  name,
  credits,
  link,
  download
) => {
  setSlidePanel({ src, palette, name, credits, link });
  if (download) triggerDownload(download);
};

export { handleLoad, handleClick };
