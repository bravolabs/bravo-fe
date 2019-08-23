import React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../../styling/atoms/Buttons';
import { LogoContainer, SlackLogo, ButtonText, Arrow, ButtonLink } from './slack-btn.styles';

import slackLogo from '../../assets/slack-logo.png';
import arrow from '../../assets/arrow.png';

const StyledBaseButton = styled(BaseButton)`
  display: flex;
  width: 200px;
  height: 48px;
  font-size: 18px;
  background: #4265ED;
  color: white;
`;

// export const SignInWithSlack = () => {
//   const clientId = process.env.REACT_APP_CLIENT_ID;
//   const scope = 'identity.basic,identity.email,identity.team,identity.avatar';
//   const url = `https://slack.com/oauth/authorize?scope=${scope}&client_id=${clientId}`;

//   return (
//     <a href={url}>
//       <img
//         alt="Sign in with Slack"
//         height="40"
//         width="172"
//         src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
//         srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
//       />
//     </a>
//   );
// };

export const AddToSlack = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const scope = 'incoming-webhook,commands';

  return (
    <ButtonLink href={`https://slack.com/oauth/authorize?client_id=${clientId}&scope=${scope},chat:write:bot,chat:write:user,im:write,im:read,im:history,users:read,channels:read`}>
      {/* <img
        alt="Add to Slack"
        height="40"
        width="139"
        src="https://platform.slack-edge.com/img/add_to_slack.png"
        srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
      /> */}
      <StyledBaseButton padding='none'>
        <LogoContainer>
          <SlackLogo src={slackLogo} />
        </LogoContainer>
        <ButtonText>Join with Slack</ButtonText>
        <Arrow src={arrow} />
      </StyledBaseButton>
    </ButtonLink>
  );
};
