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
  const KEY = process.env.REACT_APP_UNSPLASH_KEY;
  fetch(`${download}?client_id=${KEY}`);
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
