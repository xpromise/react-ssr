import {
  news
} from '../../../mock';

import {
  GET_NEWS_SUCCESS
} from './action-types'

const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  data: news
})

export const getNewsAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(getNewsSuccess(news.news));
    }, 1000)
  }
}