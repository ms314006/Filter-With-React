import { CHANGE_SEARCH_QUERY, FETCH_DATA } from '../actions/filter.js';

const initialState = {
  searchQuery: {
    page: 1,
    pageSize: 10,
    keyWord: '',
    free: '',
    allDayOpen: false,
  },
  originDataList: [],
  filterDataList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY: {
      const newQuery = {
        ...state.searchQuery,
        ...action.payload,
      };
      let filterDataList = [...state.originDataList];
      if (newQuery.keyWord !== '') {
        filterDataList = filterDataList.filter(data => data.Name.indexOf(newQuery.keyWord) > -1);
      }

      if (newQuery.free === 'Y') {
        filterDataList = filterDataList.filter(data => data.Ticketinfo === '免費參觀' || data.Ticketinfo === '');
      } else if (newQuery.free === 'N') {
        filterDataList = filterDataList.filter(data => data.Ticketinfo !== '免費參觀' && data.Ticketinfo !== '');
      }

      if (newQuery.allDayOpen) {
        filterDataList = filterDataList.filter(data => data.Opentime === '全天候開放');
      }
      return {
        ...state,
        searchQuery: {
          ...newQuery,
        },
        filterDataList,
      };
    }
    case FETCH_DATA:
      return {
        ...state,
        originDataList: action.payload.originDataList,
        filterDataList: action.payload.originDataList,
      };
    default:
      return state;
  }
};

export default reducer;
