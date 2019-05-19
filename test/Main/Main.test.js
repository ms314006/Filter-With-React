import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Main from '../../src/component/Main';
import reducer from '../../src/reducer/filter.js';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <Content />', () => {
  afterEach(() => {
    cleanup();
  });

  test('確認有沒有正確 render ', () => {
    const { getByTestId, } = renderWithRedux(<Main />);
    expect(getByTestId('mainBlock')).toBeInTheDocument();
  });
});
