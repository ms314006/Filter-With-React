import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Header from '../../../src/component/Header';
import reducer from '../../../src/reducer/filter.js';

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
    const { getByTestId, } = renderWithRedux(<Header />);
    expect(getByTestId('headerTitleBlock')).toBeInTheDocument();
    expect(getByTestId('headerInputBlock')).toBeInTheDocument();
  });

  test('輸入查詢條件', () => {
    const { getByTestId, store, } = renderWithRedux(<Header />);
    expect(store.getState().searchQuery.keyWord).toBe('');
    expect(getByTestId('keywordInput').value).toBe('');
    fireEvent.change(getByTestId('keywordInput'), { target: { value: '1', }, });
    expect(store.getState().searchQuery.keyWord).toBe('1');
    expect(getByTestId('keywordInput').value).toBe('1');
  });
});
