export default {
  // breakpoints: ["0px", "1024px", "1440px", "2560px"],
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
      lineHeight: "3rem",
      fontWeight: "600",
      pb: ".5rem"
    }
  },

  radii: {
    slidePanelRadius: "10px"
  },

  sizes: {
    headerH: "15.5rem",
    headerButtonsH: "2.75rem",
    layoutW: "1024px"
  },

  space: {
    mainPaddingX: "8.5rem",
    mainPaddingY: "2rem",
    scrollbarPadding: "50px",
    scrollbarMargin: "-50px"
  },

  buttons: {
    searchButton: {
      bg: "secondary",
      borderColor: "secondary",
      minWidth: "3rem",
      maxWidth: "3rem",
      maxHeight: "3rem",
      display: "flex",
      flexFlor: "row nowrap",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0"
    },
    uploadButton: {
      bg: "secondary",
      color: "black",
      borderRadius: "4px",
      width: "100%"
    }
  },

  variants: {
    header: {
      height: "headerH",
      bg: "primary",
      px: "mainPaddingX",
      pt: "mainPaddingY",
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "1rem",

      // fontSize: [50, 100, 150, 200],
      lineHeight: "1.5rem",
      minWidth: "layoutW"
    },
    headerActions: {
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    searchBar: {
      width: "100%",
      flexFlow: "column nowrap",
      height: "headerButtonsH",
      // height: "3rem",
      color: "white",
      border: "1px solid white",
      borderColor: "secondary",
      borderRadius: "4px"
    },
    searchInput: {},
    upload: {
      width: "20%"
    },
    workspace: {
      px: "5rem",
      flexFlow: "row wrap",
      minWidth: "layoutW",
      pt: "5.5rem",
      pb: "calc(5.5rem - 2rem)" //match whitespace from pt
    },
    mood: {
      height: "18rem",
      width: "100%",
      mb: "2rem"
    },
    moodUploaded: {
      width: "100%",
      mb: "2rem"
    },
    carouselWrapper: {
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center"
    },
    carousel: {
      minWidth: "100%",
      px: "3.5rem",
      mr: "-5%", //override margin from last image
      justifyContent: "flex-start"
    },
    tile: {
      height: "15rem",
      minHeight: "15rem",
      minWidth: "30%",
      maxWidth: "30%",
      flexWrap: "nowrap",
      flexDirection: "column",
      mr: "5%" //collapsing margins
    },
    tileImage: {
      objectFit: "cover",
      borderRadius: "1.5rem 1.5rem 0 0",
      minHeight: "75%",
      maxHeight: "75%"
    },
    swatches: {
      minHeight: "25%",
      maxHeight: "25%",
      zIndex: "2" //cover blur from blurredImage
    },
    color: {
      flex: "1 1 auto"
    },
    arrowIcon: {
      position: "relative",
      maxWidth: "0"
    },
    slidePanel: {
      zIndex: "100",
      bg: "inherit",
      p: "1rem",
      position: "fixed",
      top: "0",
      right: "-20px", //hide scrollbar
      width: "35%",
      height: "100vh",
      flexDirection: "column",
      flexWrap: "nowrap",
      overflowY: "scroll",
      boxShadow: "0 4px 6px 1px rgba(0,0,0,0.5)"
    },
    slidePanelImageWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
      justifyContent: "space-between",
      objectFit: "inherit"
    },
    closeIcon: {
      opacity: ".54",
      position: "absolute",
      width: "fit-content",
      alignSelf: "flex-end"
    },
    slidePanelBlurredImage: {
      borderRadius: "slidePanelRadius",
      width: "calc(50% - 1rem)",
      height: "10rem",
      mr: "1rem",
      filter: "blur(6px)"
    },
    colorComparison: {
      height: "10rem",
      borderRadius: "slidePanelRadius",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "calc(50% - 1rem)",
      ml: "1rem"
    },
    slidePanelImage: {
      borderRadius: "slidePanelRadius",
      width: "100%",
      mt: "1rem",
      objectFit: "cover"
    },
    roundColor: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "1.25rem",
      border: "3px solid #fff"
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
