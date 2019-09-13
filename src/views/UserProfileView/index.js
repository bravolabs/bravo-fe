import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileShoutouts } from '../../actions/shoutouts';
import { fetchTeamInfo } from '../../actions/team';

import UserProfile from '../../components/UserProfile';

const UserProfileView = ({
  user,
  shoutouts,
  userShoutouts,
  members,
  getProfileShoutouts,
  fetchTeamInfo,
  match,
  fetching,
  message,
}) => {
  const userId = match.params.id || null;
  const userInfo =
    userId && members ? members.filter(member => member.id === parseInt(userId, 10)) : null;

  useEffect(() => {
    if (userId && !members) {
      fetchTeamInfo();
    }
  }, [fetchTeamInfo, members, userId]);

  useEffect(() => {
    if (userId) {
      getProfileShoutouts(userId);
    } else {
      getProfileShoutouts();
    }
  }, [userId, getProfileShoutouts]);
  return (
    <UserProfile
      user={(userInfo && userInfo[0]) || user}
      shoutouts={userShoutouts || shoutouts}
      fetching={fetching}
      message={message}
    />
  );
};

export default connect(
  state => ({
    user: state.slack.user,
    shoutouts: state.shoutouts.profileShoutouts,
    userShoutouts: state.shoutouts.userShoutouts,
    fetching: state.shoutouts.fetching,
    message: state.shoutouts.error,
    members: state.team.members,
  }),
  { getProfileShoutouts, fetchTeamInfo }
)(UserProfileView);
