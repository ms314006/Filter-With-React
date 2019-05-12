export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';

export const changeSearchWord = word => ({
  type: CHANGE_SEARCH_WORD,
  payload: {
    word,
  },
});
