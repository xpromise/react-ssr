import {
  GET_HEADER_INFO_SUCCESS
} from './action-types';

const initState = {
  isLogin: false
}

function login(prevState = initState, action) {
  switch (action.type) {
    case GET_HEADER_INFO_SUCCESS:
      return action.data;
    default:
      return prevState;
  }
}

export default login;