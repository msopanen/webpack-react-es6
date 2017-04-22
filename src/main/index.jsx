import "./styles/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from "./components/App";
import Reducer from "./reducers/Counter";

/*ReactDOM.render (
    <App />,
    document.getElementById("root"),
);*/

const store = createStore(Reducer, { counter: 0 });

const render = (Component) => 
ReactDOM.render (
    <AppContainer>
        <Provider store={store}>
            <Component />
        </Provider>
    </AppContainer>,
    document.getElementById("root"),
);

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        console.log("toot")
        const NextApp = require('./components/App').default;
        render(NextApp);
    });
}