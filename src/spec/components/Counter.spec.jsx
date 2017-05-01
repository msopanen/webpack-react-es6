
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Counter from "../../main/components/Counter";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

it("renders initial state 0 properly",() => {

    const getState = { counter: 0 }; // initial state of the store

    const store = mockStore(getState, []);
    const tree = renderer.create(
        <Counter store={store} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

/*it("renders properly", (done) => {

    const getState = { counter: 0 }; // initial state of the store
    const increment = { type: 'INCREMENT' };
    const expectedActions = [increment];

    const store = mockStore(getState, expectedActions, done);
    const tree = renderer.create(
        <Counter store={store} />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    store.dispatch(increment);
});*/