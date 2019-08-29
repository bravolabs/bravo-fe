import axios from 'axios';
import qs from 'querystring';
import { Axios } from '../utils/axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getSlackToken = (code, redirectURI) => async dispatch => {
  const reqBody = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    redirect_uri: redirectURI,
    code,
  };
  dispatch({ type: FETCH_START });
  try {
    const { data: slackRes } = await axios.post(
      'https://slack.com/api/oauth.access',
      qs.stringify(reqBody),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    if ('error' in slackRes) {
      throw new Error(slackRes.error);
    }

    const info = {
      orgId: slackRes.team_id,
      orgName: slackRes.team_name,
      channelName: slackRes.incoming_webhook.channel,
      channelId: slackRes.incoming_webhook.channel_id,
      accessToken: slackRes.access_token,
      userId: slackRes.user_id,
    };

    const res = await Axios().post('/slack/install', info);

    dispatch({ type: FETCH_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};
