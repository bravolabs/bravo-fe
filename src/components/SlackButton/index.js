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

export const AddToSlack = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const redirectURI = `${document.location.origin}/slack`;
  const scope = 'incoming-webhook,commands';

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
        channels:read
        users.profile:read&
        redirect_uri=${redirectURI}&
        state=addAppToSlack`}>
      <StyledBaseButton padding="none">
        <LogoContainer>
          <SlackLogo src={slackLogo} />
        </LogoContainer>
        <ButtonText>
          Join with <span>Slack</span>
        </ButtonText>
        <Arrow src={arrow} />
      </StyledBaseButton>
    </ButtonLink>
  );
};
