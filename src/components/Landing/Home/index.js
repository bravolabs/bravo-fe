import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'querystring';

import { Container, Main, Intro, Caption, IntroText } from './home.styles';

import Cards from '../Cards';
import Nav from '../Nav';
import { AddToSlack } from '../SlackButton';
import Success from '../Success/index';

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
          <Caption>when the job is done, say bravo</Caption>
          <IntroText>
            bravo enables team members to easily acknowledge each other with one slack command
          </IntroText>
          {addBotSuccess ? <Success /> : <AddToSlack />}
        </Intro>
        <Cards />
      </Main>
    </Container>
  );
};
export default Home;
