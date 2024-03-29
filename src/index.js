import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <UserAuthContextProvider>
      <App />
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();