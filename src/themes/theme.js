export default {
  //typography
  fonts: {
    body: "'Open Sans', Consolas, sans-serif",
    heading: "'Open Sans', sans-serif",
    monospace: "inherit"
  },
  fontSizes: {
    mood: "2.25rem",
    logo: "4.5rem",
    or: "2.5rem",
    upload: "1.5rem",
    searchBar: "1rem"
  },
  lineHeights: {
    mood: "3rem",
    logo: "5rem",
    upload: "1.75rem",
    searchBar: "1.5rem"
  },
  fontWeights: {
    mood: 600,
    logo: 700,
    body: 300
  },
  text: {
    mood: {
      textAlign: "left",
      fontWeight: "mood",
      fontSize: "mood",
      lineHeight: "mood",
      mb: ".75rem"
    },
    logo: {
      textAlign: "left",
      fontSize: "logo",
      fontWeight: "logo",
      lineHeight: "logo",
      color: "secondary",
      width: "100%"
    },
    or: {
      width: "10%",
      color: "secondary",
      fontSize: "or",
      mx: "3px"
    }
  },

  //colors
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#FFF",
    logo: "#1B1B1B",
    // upload: "#979797",
    upload: "#C2C2C2",
    searchBar: "#fff"
  },

  //borderRadius
  radii: {
    upload: "0px",
    searchBar: "2.5rem"
  },

  //spacing
  //y -> top and bottom
  // x -> left and right
  space: {
    bodyPaddingX: "8.5rem",
    bodyPaddingY: "2rem",
    scrollbarPadding: "50px",
    scrollbarMargin: "-50px",
    arrowLeft: "5rem",
    arrowRight: "8.5rem"
  },

  //layout
  //h for height
  //w for width
  sizes: {
    uploadH: "9rem",
    uploadW: "40%",
    colorH: "3rem",
    blurredImageH: "10rem",
    blurredImageW: "100%"
  },

  //buttons

  buttons: {
    upload: {
      bg: "upload",
      p: "1rem",
      borderRadius: "upload"
    }
  },

  //variants
  variants: {
    //flex variants
    flexCenter: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%"
    },
    //the rest
    header: {
      bg: "logo",
      width: "100%",
      px: "bodyPaddingX",
      py: "bodyPaddingY"
    },
    upload: {
      width: "uploadW",
      height: "uploadH",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-evenly",
      color: "upload",
      fontSize: "upload",
      lineHeight: "upload",
      borderWidth: "4px",
      borderStyle: "dashed",
      borderColor: "upload"
    },
    searchBar: {
      width: "50%",
      borderRadius: "searchBar",
      bg: "secondary",
      pl: "1.5rem",
      alignItems: "center"
    },
    mood: {
      mx: "bodyPaddingX",
      mb: "scrollbarMargin",
      overflow: "hidden"
    },
    tileListWrapper: {
      ml: "-.75rem",
      pl: "-.75rem",
      pb: "scrollbarPadding",
      overflowX: "scroll"
    },
    tileList: {
      flexDirection: "row",
      flexWrap: "wrap",
      minWidth: "30%",
      px: ".75rem"
    },
    tileImage: {
      objectFit: "cover",
      borderTopRightRadius: "1.5rem",
      borderTopLeftRadius: "1.5rem",
      height: "blurredImageH",
      width: "blurredImageW"
    },
    color: {
      height: "colorH",
      flex: "1 1 auto"
    },
    roundColor: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "1.25rem",
      border: "3px solid #fff"
    },
    leftArrow: {
      position: "relative",
      left: "arrowLeft",
      maxWidth: "0"
    },
    rightArrow: {
      position: "relative",
      right: "arrowRight",
      maxWidth: "0"
    }
  },

  //variants for form elements
  forms: {
    searchBar: {
      fontSize: "searchBar",
      lineHeight: "searchBar",
      border: "none",
      px: "1.5rem",
      height: "3.5rem"
    }
  }
};
