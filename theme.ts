import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#ece4ff",
      100: "#c2b2ff",
      200: "#9980ff",
      300: "#704dff",
      400: "#481bfe",
      500: "#2f01e5",
      600: "#2400b3",
      700: "#180081",
      800: "#0d004f",
      900: "#050020"
    },
    lightGrey: "#FAFAFA",
    grey: "#737373"
  },
  fonts: {
    heading: "var(--font-instrument_sans)",
    body: "var(--font-instrument_sans)"
  }
});
