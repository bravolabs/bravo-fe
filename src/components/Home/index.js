import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'querystring';
import styled from 'styled-components';

import { Container, Main, Intro } from './home.styles';
import { PageTitle, ExtraInfo } from '../../styling/atoms/Fonts';
import Cards from '../Cards';
import Nav from '../Nav';
import { AddToSlack } from '../SlackButton';
// import Success from '../Success/index';

const StyledPageTitle = styled(PageTitle)`
  margin: 0 auto;
`;

const StyledExtraInfo = styled(ExtraInfo)`
  text-align: center;
  margin: 20px auto 30px auto;
  width: 530px;
  height: 45px;
`;

const Home = props => {
  const {
    location: { search },
  } = props;
  // Parse slack temporary code in URL
  const parsed = qs.parse(search);
  const { '?code': code } = parsed;
  const [addBotSuccess, setAddBotSuccess] = useState(false);

  useEffect(() => {
    const reqBody = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      code,
    };

    // Get slack access token
    if (code) {
      axios
        .post('https://slack.com/api/oauth.access', qs.stringify(reqBody), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then(res => {
          /* 
            @ res.data - contains access token from slack 
                  - contains 'bot' if Add to Slack was Clicked
                  - contains 'user' if Log in with Slack was clicked
          */
          // set to true to display success message
          console.log(res);
          setAddBotSuccess(true);
        });
    }
  }, [code]);

  return (
    <Container>
      <Nav />
      <Main>
        <Intro>
          <StyledPageTitle fontWeight="bold">when the job is done, say bravo</StyledPageTitle>
          <StyledExtraInfo>
            bravo enables team members to easily acknowledge each other with one slack command
          </StyledExtraInfo>
          {/* {addBotSuccess ? <Success /> : <AddToSlack />} */}
          <AddToSlack />
        </Intro>
        <Cards />
      </Main>
    </Container>
  );
};
export default Home;
