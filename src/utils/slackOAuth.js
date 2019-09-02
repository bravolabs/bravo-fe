import axios from 'axios';
import qs from 'query-string';

export default async (code, redirectURI) => {
  const reqBody = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    redirect_uri: redirectURI,
    code,
  };
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
  return slackRes;
};
