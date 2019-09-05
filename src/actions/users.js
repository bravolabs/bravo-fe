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

export const getUserInfo = id => async dispatch => {
  dispatch({ type: types.FETCHING_USER });
  try {
    const res = await axiosWithAuth().get('/api/users/' + id);
    dispatch(addUser({ [id]: res.data.data }));
    return res;
  } catch (err) {
    dispatch(setError(err.message));
  }
};
