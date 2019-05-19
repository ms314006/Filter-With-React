import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import FreeSelect from '../../../src/component/Content/SearchComponent/FreeSelect';
import reducer from '../../../src/reducer/filter.js';

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <FreeSelect />', () => {
  afterEach(cleanup);

  test('確認後 store 的值會變動', () => {
    const { getByTestId, store, } = renderWithRedux(<FreeSelect />);
    expect(getByTestId('freeSelect').value).toBe('');
    expect(store.getState().searchQuery.free).toBe('');

    fireEvent.change(getByTestId('freeSelect'), { target: { value: 'Y', }, });
    expect(getByTestId('freeSelect').value).toBe('Y');
    expect(store.getState().searchQuery.free).toBe('Y');

    fireEvent.change(getByTestId('freeSelect'), { target: { value: 'N', }, });
    expect(getByTestId('freeSelect').value).toBe('N');
    expect(store.getState().searchQuery.free).toBe('N');
  });

  test('確認資料有沒有正確被篩選', () => {
    const testData = [{
      Ticketinfo: '免費參觀',
      Zone: '三民區',
      Add: '高雄市三民區建國二路318號',
      Opentime:'週二至週日10:00-18:00，每週一公休',
      Description: 'dddddd',
      Name: '高雄願景館',
      Picture1: 'http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960',
      Id: 'C1_397000000A_000009',
    }, {
      Ticketinfo: '收費',
      Zone: '三民區',
      Add: '高雄市三民區同盟三路與十全三路交叉處',
      Opentime:'全天候開放',
      Description: 'aaaa',
      Name: '中都愛河濕地公園',
      Picture1: 'http://khh.travel/FileArtPic.ashx?id=1846&w=1280&h=960',
      Id: 'C1_397000000A_000010',
    }];
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

    const { getByTestId, store, } = renderWithRedux(<FreeSelect />, { initialState, });
    expect(store.getState().filterDataList.length).toBe(2);

    fireEvent.change(getByTestId('freeSelect'), { target: { value: 'Y', }, });
    expect(store.getState().filterDataList.length).toBe(1);

    fireEvent.change(getByTestId('freeSelect'), { target: { value: 'N', }, });
    expect(store.getState().filterDataList.length).toBe(1);
  });
});
