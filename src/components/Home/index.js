import React from 'react';

import { Container, Main, Intro, StyledPageTitle, StyledExtraInfo } from './home.styles';
import { AddToSlack } from '../SlackButton';
import HomeCards from '../Cards/HomeCards';
import HomeNav from '../HomeNav';

const Home = () => {
  return (
    <Container>
      <HomeNav />
      <Main>
        <Intro>
          <StyledPageTitle fontWeight="bold">when the job is done, say bravo</StyledPageTitle>
          <StyledExtraInfo>
            bravo enables team members to easily acknowledge each other with one slack command
          </StyledExtraInfo>
          <AddToSlack />
        </Intro>
        <HomeCards />
      </Main>
    </Container>
  );
};
export default Home;
