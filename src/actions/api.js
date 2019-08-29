import * as types from './types';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_HOST;

const urlConstruct = extension => {
  return `${baseURL}${extension}`;
};

const reqHandler = req => {
  return req
    .then(res => {
      dispatch({ type: types.API_SUCCESS });
      return res;
    })
    .catch(error => {
      dispatch(setError(error.message));
    });
};

export const setError = error => {
  return {
    type: types.SET_API_ERROR,
    payload: error,
  }
};

export const get = (path, auth) => dispatch => {
  if (!auth) {
    const req = axios.get(urlConstruct(path));
    return reqHandler(req);
  }
};

export const post = (path, data, auth) => dispatch => {
  if (!auth) {
    const req = axios.post(urlConstruct(path), data);
    return reqHandler(req);
  }
};
