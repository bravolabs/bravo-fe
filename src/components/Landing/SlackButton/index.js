import React from 'react';

export const SignInWithSlack = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const scope = 'identity.basic,identity.email,identity.team,identity.avatar';
  const url = `https://slack.com/oauth/authorize?scope=${scope}&client_id=${clientId}`;

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

export const AddToSlack = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const scope = 'commands';

  return (
    <a href="https://slack.com/oauth/authorize?client_id=711954789234.734180204582&scope=commands,chat:write:bot,chat:write:user,im:write,im:read,im:history,users:read,channels:read">
      <img
        alt="Add to Slack"
        height="40"
        width="139"
        src="https://platform.slack-edge.com/img/add_to_slack.png"
        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
      />
    </a>
  );
};
