export default {
  //typography
  fonts: {
    body: "'Open Sans', sans-serif",
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
    searchBar: "1.5rem",
    or: "2rem"
  },
  fontWeights: {
    mood: 600,
    logo: 800,
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
      fontStyle: "italic",
      textAlign: "left",
      fontSize: "3.75rem",
      lineHeight: "5.25rem",
      color: "secondary",
      width: "100%"
    },
    or: {
      width: "10%",
      color: "secondary",
      fontSize: "or",
      lineHeight: "or",
      mx: "3px"
    }
  },

  //colors
  colors: {
    header: "#1B1B1B",
    headerButton: "#6FE4AD",
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#FFF",
    // logo: "#1B1B1B",
    // upload: "#979797",
    upload: "#C2C2C2",
    searchBar: "#fff"
  },

  //borderRadius
  radii: {
    upload: "4px",
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
    headerH: "15.5rem",
    uploadH: "9rem",
    uploadW: "40%",
    colorH: "3rem",
    blurredImageH: "10rem",
    blurredImageW: "100%",
    searchBar: "2.5rem"
  },

  //buttons

  buttons: {
    upload: {
      bg: "headerButton",
      color: "text",
      width: "100%",
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      p: "1rem",
      borderRadius: "upload"
    },
    searchButton: {
      bg: "headerButton",
      height: "1.5rem",
      borderRadius: "0 4px 4px 0"
    },
    searchBar: {
      bg: "headerButton",
      height: "inherit",
      borderRadius: "0 4px 4px 0"
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
      bg: "header",
      height: "headerH",
      width: "100%",
      px: "bodyPaddingX",
      py: "bodyPaddingY"
    },
    upload: {
      // width: "12rem",
      height: "uploadH",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      // justifyContent: "flex-start",
      // color: "text",
      // bg: "pink",
      fontSize: "upload",
      lineHeight: "upload"
      // borderWidth: "4px",
      // borderStyle: "dashed",
      // borderColor: "upload"
    },
    searchBar: {
      height: "1.5rem"
      // width: "50%",
      // borderRadius: "searchBar",
      // bg: "pink",
      // padding: ".5rem"
      // pl: "1.5rem",
      // alignItems: "center"
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
      borderColor: "headerButton",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "4px 0 0 4px",
      fontSize: "1.5rem",
      padding: ".5rem",
      height: "1.5rem",
      width: "31rem"

      // height: 'inheri
      // height: "searchBar",
      // fontSize: "searchBar",
      // lineHeight: "searchBar",
      // border: "none",
      // width: "31rem",
      // px: "1.5rem",
      // height: "3.5rem"
    }
  }
};
