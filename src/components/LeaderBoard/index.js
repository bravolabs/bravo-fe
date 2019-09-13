import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LeaderBoardContainer, Title } from './leaderboard.styles';
import LeaderboardCards from '../Cards/LeaderboardCards';
import { fetchLeaderBoard } from '../../actions/leaderboard';

import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';

const LeaderBoard = ({ leaderboard, fetchLeaderBoard, fetching }) => {
  useEffect(() => {
    fetchLeaderBoard();
  }, [fetchLeaderBoard]);
  const leaders = leaderboard.leaderboard || null;
  return (
    <React.Fragment>
      <LeaderBoardContainer>
        <Title>Leaderboard</Title>
        {fetching && <Loader />}
        {fetching.length === 0 && (
          <DisplayCard header={<Loader />} text="Leader board is empty..." />
        )}
        {leaders && <LeaderboardCards leaders={leaders} />}
      </LeaderBoardContainer>
      {leaderboard.error && (
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
    fetching: state.leaderboard.isFetching,
  };
};

export default connect(
  mapStateToProps,
  { fetchLeaderBoard }
)(LeaderBoard);
