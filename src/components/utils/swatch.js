const copyToClipboard = color => {
  const copyText = document.createElement("textarea");
  document.body.appendChild(copyText);
  copyText.value = color;
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
};

const handleClick = (color, setShowTooltip) => {
  copyToClipboard(color);
  setShowTooltip(true);
};

export default handleClick;
