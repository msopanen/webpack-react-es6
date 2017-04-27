import "./styles/index.css";

/**
 * index.jsx is entry point of the application providing HMR that should stay unchanged.
 * all development should happen in App.jsx and it subclasses
 * 
 * @author msopanen
 */
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

const render = (Component) => 
ReactDOM.render (
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById("root")
);

render(App);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NextApp = require("./components/App").default;
        render(NextApp);
    });
}