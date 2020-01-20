import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Routes from "./routes/routes";
import history from "./services/history";

import store from "./redux/store";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
