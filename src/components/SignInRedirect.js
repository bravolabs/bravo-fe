import React from 'react';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectURI = `${document.location.origin}/slack`;
const scope = 'identity.basic,identity.email,identity.team,identity.avatar';

const SignInRedirect = props => {
  window.location.href = `https://slack.com/oauth/authorize?
    scope=${scope}&
    client_id=${clientId}&
    redirect_uri=${redirectURI}&
    state=resumeSignIn`;
  return null;
};

export default SignInRedirect;
