import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/filter.js';

export default createStore(
  reducer,
  applyMiddleware(thunk)
);
