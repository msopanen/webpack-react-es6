/**
 * index.jsx is entry point of the application providing HMR that should stay unchanged.
 * all development should happen in App.jsx and it subclasses
 *
 * @author msopanen
 */
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

import "./styles/index.css";

/* eslint-disable react/no-render-return-value */
const render = Component =>
ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
    document.getElementById("root"),
);
/* eslint-enable react/no-render-return-value */

render(App);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        /* eslint-disable global-require */
        const NextApp = require("./components/App").default;
        /* eslint-enable global-require */
        render(NextApp);
    });
}
