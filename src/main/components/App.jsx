import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from "./Counter"
import Reducer from "../reducers/Counter";

// TODO: fix hmr of reducers -> https://github.com/reactjs/react-redux/releases/tag/v2.0.0

const store = createStore(Reducer, { counter: 0 });

export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        );
    }
};
