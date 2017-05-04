
import React from "react";
import renderer from "react-test-renderer";

import Counter from "./Counter";
import configureStore from "../utils/StoreFactory";

const store = configureStore({ counter: 0 });

it("renders initial state 0 properly", () => {
    const tree = renderer.create(
      <Counter store={store} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
