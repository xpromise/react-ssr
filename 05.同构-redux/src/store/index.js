import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import clientRequest from '../client/request';
import serverRequest from '../server/request';

import {
  reducer as homeReducer
} from '../containers/home/store';
import {
  reducer as loginReducer
} from '../containers/header/store';

const reducers = combineReducers({
  news: homeReducer,
  login: loginReducer
})

export function getClientStore() {
  const preloadedState = window.__INITIAL_STATE__ || {};
  // preloadedState数据注水，初始化store数据
  return createStore(reducers, preloadedState, applyMiddleware(thunk.withExtraArgument(clientRequest)));
}

export function getServerStore() {
  return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverRequest)));
}