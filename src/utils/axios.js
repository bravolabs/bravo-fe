import axios from 'axios';

export const Axios = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: process.env.REACT_APP_API_HOST,
  });
};
