import { axiosWithAuth } from '../utils/axios';

export const types = {
  ADD_USER_INFO: 'ADD_USER_INFO',
  FETCHING_USER: 'FETCHING_USER',
  USER_ERROR: 'USER_ERROR',
};

export const addUser = user => {
  return {
    type: types.ADD_USER_INFO,
    payload: user,
  };
};

export const setError = error => {
  return {
    type: types.USER_ERROR,
    payload: error,
  };
};

export const getUserInfo = id => dispatch => {
  dispatch({ type: types.FETCHING_USER });
  return axiosWithAuth()
    .get('/api/users/' + id)
    .then(res => {
      dispatch(addUser({ [res.data.data.slack_mem_id]: res.data.data }));
    })
    .catch(err => {
      dispatch(setError(err.message));
    });
};
