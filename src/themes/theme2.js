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
      fontWeight: "400"
    }
  },

  sizes: {
    headerH: "15.5rem",
    headerButtonsH: "2.75rem"
  },

  space: {
    mainPaddingX: "8.5rem",
    mainPaddingY: "2rem"
  },

  buttons: {
    searchButton: {
      borderRadius: "0 4px 4px 0",
      bg: "secondary",
      borderColor: "secondary",
      width: "10%",
      maxWidth: "3rem"
    },
    uploadButton: {
      bg: "secondary",
      color: "black",
      borderRadius: "4px",
      width: "100%"
      //   textAlign: "center"
      //   width: "20%"
      //   height: "100%"
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
