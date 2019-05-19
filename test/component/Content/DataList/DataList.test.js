import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import DataList from '../../../../src/component/Content/DataList';
import reducer from '../../../../src/reducer/filter.js';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

const testData = [];

const initialState = {
  searchQuery: {
    page: 1,
    pageSize: 10,
    keyWord: '',
    free: '',
    allDayOpen: false,
  },
  originDataList: [...testData],
  filterDataList: [...testData],
};

describe('test <DataList />', () => {
  afterEach(cleanup);

  test('確認有沒有正確 render', () => {
    const { getByTestId, } = renderWithRedux(<DataList />, { initialState, });
    expect(getByTestId('dataCountText').querySelector('span').innerHTML).toBe('&nbsp;0&nbsp;');
    expect(getByTestId('searchTagBlock')).toBeInTheDocument();
    expect(getByTestId('paginationBlock')).toBeInTheDocument();
    expect(getByTestId('dataListBlock')).toBeInTheDocument();
  });

  test('free 為 Y 時', () => {
    initialState.searchQuery.free = 'Y';
    const { getByTestId, } = renderWithRedux(<DataList />, { initialState, });
    expect(getByTestId('freeTag').innerHTML).toBe('免費入場');
  });

  test('free 為 N 時', () => {
    initialState.searchQuery.free = 'N';
    const { getByTestId, } = renderWithRedux(<DataList />, { initialState, });
    expect(getByTestId('freeTag').innerHTML).toBe('需付費入場');
  });

  test('allDayOpen 為 true 時', () => {
    initialState.searchQuery.allDayOpen = true;
    const { getByTestId, } = renderWithRedux(<DataList />, { initialState, });
    expect(getByTestId('allDayOprnTag').innerHTML).toBe('全天候開放');
  });
});
