import axios from 'axios';
import localstorage from '../utils/localstorage';

const { token } = localstorage.get() || '';

export const Axios = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};
