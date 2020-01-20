import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes/routes";
import history from "./services/history";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
