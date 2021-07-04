import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const mainWhite = "#fff";
const mainBlue = "#006aff";
const mainBlack = "#000";
const mainGray = "#f2f2f2";
const lightBrown = "#d6ad60";
const lightBlue = "#5d87d6";
const darkBlue = "#2b57ab";

// Create a theme instance.
let coreTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      sd: 960,
      sl: 991,
      ml: 1024,
      md: 1200,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiDialog: {
      root: {
        "& $container": {
          "& $paperScrollPaper": {
            height: "60%",
            maxHeight: "100%",
            justifyContent: "center",
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
      },
    },
    MuiTableContainer: {
      root: {
        boxShadow: "none",
      },
    },
    MuiPopover: {
      root: {
        "& $paper": {
          overflowX: "show",
        },
      },
    },
  },
  palette: {
    common: {
      white: mainWhite,
      blue: mainBlue,
      black: mainBlack,
      gray: mainGray,
      lightBrown: lightBrown,
      lightBlue: lightBlue,
    },
    primary: {
      main: mainWhite,
    },
    secondary: {
      main: mainBlue,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "'Quicksand'",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
    ].join(","),
    h1: {
      color: mainBlack,
    },
    h2: {
      color: mainBlack,
    },
    h3: {
      color: mainBlack,
      fontFamily: '"STIX Two Math',
    },
    h4: {
      color: mainBlack,
    },
    h5: {
      color: mainBlack,
    },
    subtitle1: {
      fontFamily: '"STIX Two Math',
    },
    button: {
      backgroundColor: lightBlue,

      "&.MuiButton-outlinedPrimary": {
        color: `${mainBlue} !important`,
      },
      "&.MuiButton-text": {
        color: mainWhite,
      },
      "&.MuiButton-root:hover": {
        backgroundColor: darkBlue,
        border: "1px solid rgb(209, 209, 213)",
      },
    },
  },
});

coreTheme = responsiveFontSizes(coreTheme);

export default coreTheme;
