import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "./hooks/Materialtheme.js";
import { PageNameProvider } from "./hooks/PageNameProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <PageNameProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PageNameProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
