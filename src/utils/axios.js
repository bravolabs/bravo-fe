import axios from 'axios';

export const Axios = (token = null) => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};
