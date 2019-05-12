import { CHANGE_SEARCH_WORD } from '../actions/filter.js';

const initialState = {
  searchWord: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.word,
      };
    default:
      return state;
  }
};

export default reducer;
