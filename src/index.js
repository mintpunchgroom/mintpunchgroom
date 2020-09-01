import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import Normalize from "./style/Normalize";
import { defaultTheme } from "./style/defaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
