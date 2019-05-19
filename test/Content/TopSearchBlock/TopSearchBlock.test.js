import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import TopSearchBlock from '../../../src/component/Content/TopSearchBlock';
import reducer from '../../../src/reducer/filter.js';

expect.extend({ toBeInTheDocument, });

const renderWithRedux = (ui, { initialState, store = createStore(reducer, initialState), } = {}) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('test <TopSearchBlock />', () => {
  afterEach(cleanup);

  test('render 是否正常', () => {
    const { getByTestId, } = renderWithRedux(<TopSearchBlock />);
    expect(getByTestId('topSearchBlock')).toBeInTheDocument();
    expect(getByTestId('freePanelBlock').className).toBe('panel_block ');
    expect(getByTestId('otherPanelBlock').className).toBe('panel_block ');
    expect(getByTestId('freePanelSwitchText').innerHTML).toBe('+');
    expect(getByTestId('otherPanelSwitchText').innerHTML).toBe('+');
  });

  test('展開 panel class 是否會跟著改變', () => {
    const { getByTestId, getByText, } = renderWithRedux(<TopSearchBlock />);
    fireEvent.click(getByText('免費入場'));
    expect(getByTestId('freePanelBlock').className).toBe('panel_block open_panel_block');
    expect(getByTestId('freePanelSwitchText').innerHTML).toBe('-');

    fireEvent.click(getByText('其他條件'));
    expect(getByTestId('otherPanelBlock').className).toBe('panel_block open_panel_block');
    expect(getByTestId('otherPanelSwitchText').innerHTML).toBe('-');
  });
});
