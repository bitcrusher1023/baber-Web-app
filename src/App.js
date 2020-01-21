import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Routes from "./routes/routes";
import history from "./services/history";

import { store, persistor } from "./redux/store";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
            <Routes />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
