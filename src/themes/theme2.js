export default {
  colors: {
    primary: "#1B1B1B", //blackish gray
    secondary: "#6FE4AD", //light green
    active: "#D9FDE4",
    black: "#000",
    white: "#fff"
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "inherit"
  },

  text: {
    logo: {
      color: "white",
      width: "100%",
      fontStyle: "italic",
      fontWeight: "800",
      fontSize: "4rem",
      lineHeight: "5.5rem",
      textAlign: "left"
    },
    or: {
      width: "10%",
      color: "white",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "400",
      textAlign: "center"
    },
    moodHeader: {
      fontSize: "2.5rem",
      lineHeight: "4rem",
      fontWeight: "600",
      pb: ".5rem"
    }
  },

  sizes: {
    headerH: "15.5rem",
    headerButtonsH: "2.75rem"
  },

  space: {
    mainPaddingX: "8.5rem",
    mainPaddingY: "2rem",
    scrollbarPadding: "50px",
    scrollbarMargin: "-50px"
  },

  buttons: {
    searchButton: {
      borderRadius: "0 4px 4px 0",
      bg: "secondary",
      borderColor: "secondary",
      width: "10%",
      maxWidth: "3rem",
      display: "flex",
      flexFlor: "row nowrap",
      alignItems: "center",
      justifyContent: "center"
    },
    uploadButton: {
      bg: "secondary",
      color: "black",
      borderRadius: "4px",
      width: "100%"
    }
  },

  variants: {
    flexCenter: {
      justifyContent: "center",
      bg: "white"
    },
    header: {
      height: "headerH",
      bg: "primary",
      px: "mainPaddingX",
      pt: "mainPaddingY",
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "1rem",
      lineHeight: "1.5rem"
    },
    headerActions: {
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    searchBar: {
      width: "40%",
      height: "headerButtonsH"
    },
    upload: {
      width: "20%"
    },
    mood: {
      mx: "mainPaddingX",
      mb: "scrollbarMargin",
      overflow: "hidden"
    },
    tileListWrapper: {
      ml: "-.75rem",
      overflow: "auto",
      alignItems: "center"
    },
    tileList: {
      flexDirection: "column",
      minWidth: "30%",
      px: ".75rem"
    },
    tile: {
      height: "15rem",
      minWidth: "30%",
      flexWrap: "nowrap",
      flexDirection: "column",
      mx: ".75rem"
    },
    tileImage: {
      objectFit: "cover",
      borderRadius: "1.5rem 1.5rem 0 0",
      height: "10rem"
    },
    color: {
      height: "5rem",
      flex: "1 1 auto"
    },
    leftArrow: {
      position: "relative",
      left: "5rem",
      top: "9rem"
    },
    rightArrow: {
      position: "relative",
      left: "-6.5rem",
      top: "9rem"
    }
  },

  forms: {
    searchInput: {
      borderRadius: "4px 0 0 4px",
      borderColor: "secondary",
      color: "white",
      pl: ".5rem"
    },

    uploadLabel: {
      justifyContent: "center",
      alignItems: "center",
      height: "headerButtonsH"
    }
  }
};
