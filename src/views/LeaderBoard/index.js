import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLeaderBoard } from '../../actions/leaderboard';

import LeaderBoard from '../../components/LeaderBoard';

export default function LeaderBoardView() {
  return (
    <div>
      <LeaderBoard />
    </div>
  );
}
