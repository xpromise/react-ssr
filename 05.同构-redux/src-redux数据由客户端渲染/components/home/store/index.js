/*
  此模块为了简化引入reducer和action-creators
*/
import {
  getNewsAsync
} from './action-creators';
import reducer from './reducer';

export {
  getNewsAsync,
  reducer
}