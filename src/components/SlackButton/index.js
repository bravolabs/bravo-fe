import React from 'react';

import {
  LogoContainer,
  SlackLogo,
  ButtonText,
  Arrow,
  ButtonLink,
  StyledBaseButton,
} from './slack-btn.styles';
import slackLogo from '../../assets/slack-logo.png';
import arrow from '../../assets/arrow.png';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectURI = `${document.location.origin}/slack`;

export const AddToSlack = () => {
  const scope = 'incoming-webhook,commands,bot';

  return (
    <ButtonLink
      href={`https://slack.com/oauth/authorize?
        client_id=${clientId}&
        scope=${scope},
        chat:write:bot,
        chat:write:user,
        im:write,
        im:read,
        im:history,users:read,
        reactions:write,
        reactions:read,
        channels:read
        users.profile:read&
        redirect_uri=${redirectURI}&
        state=addAppToSlack`}>
      <StyledBaseButton padding="none">
        <LogoContainer>
          <SlackLogo src={slackLogo} />
        </LogoContainer>
        <ButtonText>
          Add to <span>Slack</span>
        </ButtonText>
        <Arrow src={arrow} />
      </StyledBaseButton>
    </ButtonLink>
  );
};

export const SignInWithSlack = () => {
  const scope = 'identity.basic,identity.email,identity.team,identity.avatar';

  return (
    <a
      href={`https://slack.com/oauth/authorize?
        scope=${scope}&
        client_id=${clientId}&
        redirect_uri=${redirectURI}&
        state=resumeSignIn`}>
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
