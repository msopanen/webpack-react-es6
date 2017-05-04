
import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import Counter from "./Counter";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const getState = () => ({ counter: 0 }); // initial state of the store

it("renders initial state 0 properly", () => {
    const store = mockStore(getState);
    const tree = renderer.create(
      <Counter store={store} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
