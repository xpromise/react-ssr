import {
  GET_NEWS_SUCCESS
} from './action-types'

const getNewsSuccess = (news) => ({
  type: GET_NEWS_SUCCESS,
  data: news
})

export const getNewsAsync = () => {
  // reqNewsList 如果在客户端当前路径是 http://localhost:3000 所以 /api --> http://localhost:3000/api
  // 如果在服务端因为没有地址，所以默认是 127.0.0.1:80 所以 /api --> 127.0.0.1:80/api
  // 访问就出错了
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/news.json')
      .then((res) => {
        dispatch(getNewsSuccess(res));
      })
      .catch((err) => {
        console.log('请求news失败', err);
      })
  }
}