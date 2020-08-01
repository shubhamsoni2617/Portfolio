import React from "react";
import { createStore, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Provider = ({ children }) => {
  const store = createStore(reducer, composeEnhancers());
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
