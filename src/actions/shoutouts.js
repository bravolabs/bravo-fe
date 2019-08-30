import * as types from './types';
import { fetch } from './api';

export const setSingleShoutout = shoutout => {
  return {
    type: types.SET_SINGLE_SHOUTOUT,
    payload: shoutout,
  };
};

export const getSingleShoutout = id => dispatch => {
  return dispatch(fetch('/api/shoutouts/' + id, true)).then(res => {
    dispatch(setSingleShoutout(res.data));
  });
};
