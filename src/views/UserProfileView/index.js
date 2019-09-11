import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileShoutouts } from '../../actions/shoutouts';

import UserProfile from '../../components/UserProfile';

const UserProfileView = ({
  user,
  shoutouts,
  userShoutouts,
  members,
  getProfileShoutouts,
  match,
  fetching,
  message,
}) => {
  const userId = match.params.id || null;
  const userInfo =
    userId && members ? members.filter(member => member.id === parseInt(userId, 10)) : null;

  useEffect(() => {
    if (userId) {
      getProfileShoutouts(userId);
    } else if (!userId && !shoutouts) {
      getProfileShoutouts();
    }
  }, [userId, getProfileShoutouts, shoutouts]);
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
  { getProfileShoutouts }
)(UserProfileView);
