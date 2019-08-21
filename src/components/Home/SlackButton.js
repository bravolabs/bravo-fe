import React from 'react';

const SlackButton = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectURI = process.env.REACT_APP_REDIRECT_URI;
  const scope = 'identity.basic,identity.email,identity.team,identity.avatar';
  const url = `https://slack.com/oauth/authorize?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectURI}`;

  return (
    <a href={url}>
      <img
        alt="Sign in with Slack"
        height="40"
        width="172"
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </a>
  );
};

export default SlackButton;
