export default {
  colors: {
    primary: "#1B1B1B", //blackish gray
    secondary: "#6FE4AD", //light green
    active: "#D9FDE4",
    black: "#000",
    white: "#fff",
    focused: "#D9FDE4"
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
    header: {
      fontSize: "2.5rem",
      lineHeight: "3rem",
      fontWeight: "600",
      pb: ".5rem",
      pl: "3.5rem"
    }
  },

  radii: {
    slidePanelRadius: ".75rem",
    tileRadius: "",
    buttonRadius: ".4rem"
  },

  sizes: {
    headerH: "15.5rem",
    headerButtonsH: "2.75rem",
    layoutW: "1024px",
    buttonH: "3rem"
  },

  space: {
    mainPaddingX: "8.5rem",
    mainPaddingY: "2rem",
    scrollbarPadding: "3rem",
    scrollbarMargin: "-3rem"
  },

  buttons: {
    primary: {
      bg: "secondary",
      borderRadius: "buttonRadius",
      minHeight: "buttonH",
      maxHeight: "buttonH",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "center",
      color: "black"
    }
  },

  variants: {
    center: {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      height: "headerH",
      bg: "primary",
      px: "mainPaddingX",
      pt: "mainPaddingY",
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "1rem",
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
      color: "white",
      borderRadius: "buttonRadius"
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
      mb: "2rem",
      flexFlow: "row wrap",
      justifyContent: "space-between"
    },
    carouselWrapper: {
      flexFlow: "row nowrap",
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
      flexFlow: "column nowrap",
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
      flexFlow: "column nowrap",
      overflowY: "auto",
      boxShadow: "0 .4rem .5rem 1px rgba(0,0,0,0.5)"
    },
    closeIcon: {
      opacity: ".54",
      position: "absolute",
      width: "fit-content",
      alignSelf: "flex-end"
    },
    slidePanelSmallImage: {
      borderRadius: "slidePanelRadius",
      width: "calc(50% - .5rem)",
      height: "10rem"
    }
  }
};
