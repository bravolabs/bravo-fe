import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import {  } from './leaderboard.styles';
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
  return (
    <div>
      <h1>Hello LeaderBoard</h1>
    </div>
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
