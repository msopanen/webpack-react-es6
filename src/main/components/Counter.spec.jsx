
import React from "react";
import { mount } from "enzyme";

import Counter from "./Counter";
import configureStore from "../utils/StoreFactory";

const store = configureStore({ counter: 0 });

const clickButton = (wrapper, id) => {
    const btn = wrapper.find(id);
    btn.simulate("click");
};

it("renders initial state and plus and minus", () => {
    const wrapper = mount(
      <Counter store={store} />,
    );

    expect(wrapper).toMatchSnapshot();

    clickButton(wrapper, "#plus");

    expect(wrapper).toMatchSnapshot();

    clickButton(wrapper, "#minus");

    expect(wrapper).toMatchSnapshot();
});
