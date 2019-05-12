import { CHANGE_SEARCH_QUERY, FETCH_DATA } from '../actions/filter.js';

const initialState = {
  searchQuery: {
    keyWord: '',
  },
  dataList: [],
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
    console.log({
      ...state,
      dataList: action.payload.dataList,
    })
      return {
        ...state,
        dataList: action.payload.dataList,
      };
    default:
      return state;
  }
};

export default reducer;
