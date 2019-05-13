import { CHANGE_SEARCH_QUERY, FETCH_DATA, FILTER_DATA } from '../actions/filter.js';

const initialState = {
  searchQuery: {
    keyWord: '',
    free: '',
    allDayOpen: false,
  },
  originDataList: [],
  filterDataList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: {
          ...state.searchQuery,
          ...action.payload,
        },
      };
    case FETCH_DATA:
      return {
        ...state,
        originDataList: action.payload.originDataList,
        filterDataList: action.payload.originDataList.slice(0, 10),
      };
    case FILTER_DATA: {
      const { page, pageSize, } = action.payload.query;
      return {
        ...state,
        filterDataList: state.originDataList.slice((page - 1) * pageSize, pageSize * page),
      };
    }
    default:
      return state;
  }
};

export default reducer;
