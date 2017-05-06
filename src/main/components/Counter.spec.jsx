
import React from "react";
import { IntlProvider } from "react-intl";
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
      <IntlProvider locale="en" >
        <Counter store={store} />
      </IntlProvider>,
    );

    expect(wrapper).toMatchSnapshot();

    clickButton(wrapper, "#plus");

    expect(wrapper).toMatchSnapshot();

    clickButton(wrapper, "#minus");

    expect(wrapper).toMatchSnapshot();
});
