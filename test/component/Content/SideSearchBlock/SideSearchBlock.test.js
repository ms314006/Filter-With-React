import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import SideSearchBlock from '../../../../src/component/Content/SideSearchBlock';
import reducer from '../../../../src/reducer/filter.js';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <SideSearchBlock />', () => {
  afterEach(cleanup);

  test('render 是否正常', () => {
    const { getByTestId, } = renderWithRedux(<SideSearchBlock />);
    expect(getByTestId('sideSearchBlock')).toBeInTheDocument();
  });
});
