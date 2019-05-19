import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import fetchMock from 'fetch-mock';
import Content from '../../../src/component/Content';
import reducer from '../../../src/reducer/filter.js';

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

describe('test <Content />', () => {
  afterEach(() => {
    cleanup();
    fetchMock.restore();
  });

  test('確認有沒有正確 render，及 render 有沒有 getData', () => {
    fetchMock.getOnce('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', {
      result: {
        records: [{
          Name: '假資料 1',
        }, {
          Name: '假資料 2',
        }],
      },
    });
    const { getByTestId, } = renderWithRedux(<Content />, { initialState, });
    expect(getByTestId('conetntBlock')).toBeInTheDocument();
    expect(fetchMock.calls().length).toBe(1);
  });
});
