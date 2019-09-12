import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Main, Intro, StyledPageTitle, StyledExtraInfo } from './home.styles';
import { AddToSlack } from '../SlackButton';
import HomeCards from '../Cards/HomeCards';
import HomeNav from '../HomeNav';

const Home = ({ slack }) => {
  return (
    <Container>
      {!slack.isLoggedIn ? (
        <>
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
        </>
      ) : (
        <Redirect to="/profile" />
      )}
    </Container>
  );
};
export default connect(state => ({ slack: state.slack }))(Home);
