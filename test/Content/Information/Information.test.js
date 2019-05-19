import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Information from '../../../src/component/Content/Information';
import reducer from '../../../src/reducer/filter.js';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

const testData = [{
  Ticketinfo: '免費參觀',
  Zone: '三民區',
  Add: '高雄市三民區建國二路318號',
  Opentime: '週二至週日10:00-18:00，每週一公休',
  Description: 'dddddd',
  Name: '高雄願景館',
  Picture1: 'http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960',
  Id: 'C1_397000000A_000009',
}, {
  Ticketinfo: '免費參觀',
  Zone: '三民區',
  Add: '高雄市三民區同盟三路與十全三路交叉處',
  Opentime: '全天候開放',
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

const props = {
  match: {
    params: {
      Id: 'C1_397000000A_000010',
    },
  },
};

describe('test <Information />', () => {
  afterEach(cleanup);

  test('確認有沒有正確 render', () => {
    const { getByTestId, } = renderWithRedux(
      <HashRouter>
        <Information {...props} />
      </HashRouter>, { initialState, }
    );
    expect(getByTestId('informationBlock')).toBeInTheDocument();
    expect(getByTestId('informationHeader')).toBeInTheDocument();
    expect(getByTestId('informationContent')).toBeInTheDocument();
    expect(getByTestId('imgBlock').style.backgroundImage).toBe(`url(${testData[1].Picture1})`);
    expect(getByTestId('nameBlock').innerHTML).toBe(testData[1].Name);
    expect(getByTestId('zoneBlock').innerHTML).toBe(testData[1].Zone);
    expect(getByTestId('addBlock').innerHTML).toBe(testData[1].Add);
    expect(getByTestId('openTime').innerHTML).toBe(testData[1].Opentime);
    expect(getByTestId('description').innerHTML).toBe(testData[1].Description);
  });

  test('確認 router 是否正常', () => {
    const route = '/informaction/C1_397000000A_000010';
    const history = createMemoryHistory({ initialEntries: [route], });
    const { getByTestId, } = renderWithRedux(
      <Router history={history}>
        <Information {...props} />
      </Router>, { initialState, }
    );

    expect(history.location.pathname).toBe('/informaction/C1_397000000A_000010');
    fireEvent.click(getByTestId('exploreLink'));
    expect(history.location.pathname).toBe('/');
  });
});
