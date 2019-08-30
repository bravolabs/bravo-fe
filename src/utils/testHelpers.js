import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import reducer from '../reducers';

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store,
  };
};
