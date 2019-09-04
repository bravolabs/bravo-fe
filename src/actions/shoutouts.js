import { axiosWithAuth } from '../utils/axios';

export const types = {
  SET_SINGLE_SHOUTOUT: 'SET_SINGLE_SHOUTOUT',
  FETCHING_SHOUTOUT: 'FETCHING_SHOUTOUT',
  SHOUTOUT_ERROR: 'SHOUTOUT_ERROR',
};

export const setSingleShoutout = shoutout => {
  return {
    type: types.SET_SINGLE_SHOUTOUT,
    payload: shoutout,
  };
};

export const setError = error => {
  return {
    type: types.SHOUTOUT_ERROR,
    payload: error,
  };
};

export const getSingleShoutout = id => dispatch => {
  dispatch({ type: types.FETCHING_SHOUTOUT });
  return axiosWithAuth()
    .get('/api/shoutouts/' + id)
    .then(res => {
      dispatch(setSingleShoutout(res.data.data));
    })
    .catch(err => {
      dispatch(setError(err.message));
    });
};
