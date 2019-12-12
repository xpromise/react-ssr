import {
  GET_HEADER_INFO_SUCCESS
} from './action-types';


const getHeaderInfoSuccess = (data) => ({
  type: GET_HEADER_INFO_SUCCESS,
  data
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/islogin')
      .then((res) => {
        dispatch(getHeaderInfoSuccess(res));
      })
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/login')
      .then((res) => {
        dispatch(getHeaderInfoSuccess(res));
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/logout')
      .then((res) => {
        dispatch(getHeaderInfoSuccess(res));
      })
  }
}