import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Figtree"],
    fontSize: 16,
  },
  palette: {
    light: {
      primary: "var(rgb(--color-primary))",
      secondary: "var(rgb(--color-secondary))",
    },
  },
});

export default theme;
