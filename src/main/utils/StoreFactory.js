import { createStore } from 'redux';

import Reducer from "../reducers/Counter";

/**
 * HMR for reducers 
 * https://github.com/reactjs/react-redux/releases/tag/v2.0.0
 * 
 * @param {*} state 
 */
export default (state) => {
    const store = createStore(Reducer, state);
    
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers/Counter", () => {
            const nextRootReducer = require("../reducers/Counter").default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};