import {
  GET_NEWS_SUCCESS
} from './action-types'

const initState = [];

function news(prevState = initState, action) {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return action.data;
    default:
      return prevState;
  }
}

export default news;