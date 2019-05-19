import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Data from '../../../../src/component/Content/DataList/Data';


const props = {
  data: {
    Ticketinfo: '免費參觀',
    Zone: '三民區',
    Add: '高雄市三民區建國二路318號',
    Opentime: '週二至週日10:00-18:00，每週一公休',
    Description: 'dddddd',
    Name: '高雄願景館',
    Picture1: 'http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960',
    Id: 'C1_397000000A_000009',
  },
};

describe('test <Data />', () => {
  afterEach(cleanup);

  test('render 是否正常', () => {
    const { getByTestId, } = render(
      <HashRouter>
        <Data {...props} />
      </HashRouter>
    );

    expect(getByTestId('name').innerHTML).toBe(props.data.Name);
    expect(getByTestId('img').style.backgroundImage).toBe(`url(${props.data.Picture1})`);
    expect(getByTestId('description').innerHTML).toBe(`${props.data.Description.slice(0, 60)}...`);
    expect(getByTestId('zone').innerHTML).toBe(props.data.Zone);
    expect(getByTestId('add').innerHTML).toMatch(props.data.Add);
    expect(getByTestId('openTime').innerHTML).toMatch(props.data.Opentime);

  });

  test('Link 是否會正確改變路由', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });
    const { getByTestId, } = render(
      <Router history={history}>
        <Data {...props} />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByTestId('name'));
    expect(history.location.pathname).toBe('/informaction/C1_397000000A_000009');
  });

});
