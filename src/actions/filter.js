export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

export const changeSearchQuery = query => ({
  type: CHANGE_SEARCH_QUERY,
  payload: {
    ...query,
  },
});

export const FETCH_DATA = 'FETCH_DATA';

const fetchDataSuccess = dataList => ({
  type: FETCH_DATA,
  payload: {
    dataList,
  },
});

const getData = () => (
  fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(response => (
      response.json()
    )).then(myJson => (
      myJson
    ))
);

const fakeGetData = data => (
  new Promise((resolve) => {
    resolve(
      getData(data)
    );
  })
);

export const fetchData = dispatch => (
  () => (
    fakeGetData()
      .then((json) => {
        const content = {
          ...json.result.records,
        };
        dispatch(fetchDataSuccess(content));
      })
  )
);
