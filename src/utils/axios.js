import axios from 'axios';
import localstorage from './localstorage';

export const Axios = (token = null) => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: localstorage.get().token || '',
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};
