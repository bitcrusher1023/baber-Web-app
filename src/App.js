import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes/routes";
import history from "./services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
