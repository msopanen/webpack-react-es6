import React from "react";
import { Provider } from "react-redux";

import Counter from "./Counter";
import configureStore from "../utils/StoreFactory";

const store = configureStore({ counter: 0 });

export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
};

