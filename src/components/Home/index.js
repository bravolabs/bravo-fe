import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'querystring';

import { Container, Main, Intro, Caption, IntroText } from './home.styles';

import Cards from './Cards';
import Nav from './Nav';
import { AddToSlack } from './SlackButton';

const Home = props => {
  const { location } = props;
  // Parse slack temporary code in URL
  const parsed = qs.parse(location.search);
  const { '?code': code } = parsed;

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
          // res contains access token from slack
          console.log(res);
        });
    }
  }, [code, location.search]);

  return (
    <Container>
      <Nav />
      <Main>
        <Intro>
          <Caption>when the job is done, say bravo</Caption>
          <IntroText>
            bravo enables team members to easily acknowledge each other with one slack command
          </IntroText>
          <AddToSlack />
        </Intro>
        <Cards />
      </Main>
    </Container>
  );
};
export default Home;
