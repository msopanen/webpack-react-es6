import React from "react";
import { Provider } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import fi from "react-intl/locale-data/fi";

import Counter from "./Counter";
import configureStore from "../utils/StoreFactory";

// https://medium.freecodecamp.com/internationalization-in-react-7264738274a0

import * as localeData from "../locales/data.json";

addLocaleData([...en, ...fi]);

const store = configureStore({ counter: 0 });
const userLocale = "en";

const App = () => (
  <Provider store={store}>
    <IntlProvider locale={userLocale} messages={localeData[userLocale]} >
      <Counter />
    </IntlProvider>
  </Provider>
  );

export default App;

/** following is not accepted in airbnb rules and thus is tured as abowe */
/* export default class App extends React.Component {

    render() {
        return (
          <Provider store={store}>
            <Counter />
          </Provider>
        );
    }
}*/
