import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import {
  reducer as homeReducer
} from '../components/home/store';

const reducers = combineReducers({
  news: homeReducer
})

export default function getStore() {
  return createStore(reducers, applyMiddleware(thunk));
}