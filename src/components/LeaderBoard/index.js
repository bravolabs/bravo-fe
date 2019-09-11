import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LeaderBoardContainer, Title } from './leaderboard.styles';
import LeaderboardCards from '../Cards/LeaderboardCards';
import { fetchLeaderBoard } from '../../actions/leaderboard';

import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';
import localstorage from '../../utils/localstorage';

const LeaderBoard = ({ leaderboard, fetchLeaderBoard }) => {
  useEffect(() => {
    if (leaderboard && !leaderboard.leaderboard) {
      fetchLeaderBoard();
    }
  }, []);
  const leaders = leaderboard.leaderboard || null;
  return (
    <React.Fragment>
      {leaderboard.isFetching && <DisplayCard header={<Loader />} text="Loading your Team..." />}
      {leaderboard && (
        <LeaderBoardContainer>
          <Title>Leaderboard</Title>
          <LeaderboardCards leaders={leaders} />
        </LeaderBoardContainer>
      )}
      {leaderboard.message && (
        <DisplayCard
          header={<img src={bravoParty} alt="bravo party" />}
          text={leaderboard.message}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard,
  };
};

export default connect(
  mapStateToProps,
  { fetchLeaderBoard }
)(LeaderBoard);
