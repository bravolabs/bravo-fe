import axios from 'axios';

export const Axios = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || 'a',
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
}