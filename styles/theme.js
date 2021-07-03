import { createMuiTheme } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const mainWhite = "#fff";
const mainBlue = "#006aff";
const mainBlack = "#000";
const mainGray = "#f2f2f2";
const lightBlue = "#f2faff";
const lightBrown = "#d6ad60";

// Create a theme instance.
export const coreTheme = createMuiTheme({
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
          "& $paper": {
          },
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
    },
    h4: {
      color: mainBlack,
    },
    h5: {
      color: mainBlack,
    },
    button: {
      backgroundColor: mainWhite,

      "&.MuiButton-outlinedPrimary": {
        color: `${mainBlue} !important`,
      },
      "&.MuiButton-text": {
        color: mainBlack,
      },
      "&.MuiButton-root:hover": {
        backgroundColor: lightBlue,
        border: "1px solid rgb(209, 209, 213)",
      },
      "&.MuiButton-label": {
        color: mainBlue,
      },
    },
  },
});
