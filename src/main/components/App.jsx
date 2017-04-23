import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Counter from "./Counter"
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

