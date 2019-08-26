import axios from 'axios';
import qs from 'querystring';
import { Axios } from '../utils/axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getSlackToken = code => async dispatch => {
  const reqBody = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    code,
  };
  dispatch({ type: FETCH_START });
  try {
    const slackRes = await axios.post('https://slack.com/api/oauth.access', qs.stringify(reqBody), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if ('error' in slackRes.data) {
      throw new Error(slackRes.data.error);
    }
    // const res = await Axios().post('/api/addSlack', slackRes);
    dispatch({ type: FETCH_SUCCESS, payload: slackRes.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};
