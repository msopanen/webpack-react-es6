import "./styles/index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from "./components/App";

/*ReactDOM.render (
    <App />,
    document.getElementById("root"),
);*/

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

const store = createStore(reducer, { counter: 0 });

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