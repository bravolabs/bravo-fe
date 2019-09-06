import { Axios } from '../utils/axios';
import slackOAuth from '../utils/slackOAuth';
import { loggedIn } from './auth';
import localstorage from '../utils/localstorage';

export const FETCH_START = 'FETCH_START';
export const INSTALL_SUCCESS = 'INSTALL_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const appInstall = (code, redirectURI) => async dispatch => {
  dispatch({ type: FETCH_START });
  try {
    const slackToken = await slackOAuth(code, redirectURI);
    const info = {
      orgId: slackToken.team_id,
      orgName: slackToken.team_name,
      channelName: slackToken.incoming_webhook.channel,
      channelId: slackToken.incoming_webhook.channel_id,
      accessToken: slackToken.access_token,
      userId: slackToken.user_id,
    };
    const res = await Axios().post('/slack/install', info);
    dispatch({ type: INSTALL_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};

export const signInWithSlack = (code, redirectURI) => async dispatch => {
  dispatch({ type: FETCH_START });
  try {
    const { access_token: accessToken, user } = await slackOAuth(code, redirectURI);
    const { data } = await Axios().post('/api/auths', { accessToken, userId: user.id });
    const { name, avatar } = data;
    dispatch(loggedIn({ name, avatar }));
    localstorage.set(data);
    return true;
  } catch (error) {
    if (error.response) {
      dispatch({ type: FETCH_ERROR, payload: error.response.data.message });
    } else {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  }
};
