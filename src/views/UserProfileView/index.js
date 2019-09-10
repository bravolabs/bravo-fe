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
}) => {
  const userId = match.params.id || null;
  const userInfo = userId ? members.filter(member => member.id === parseInt(userId, 10)) : null;

  useEffect(() => {
    if (userId && !userShoutouts) {
      getProfileShoutouts(userId);
    } else if (!shoutouts) {
      getProfileShoutouts();
    }
  }, []);
  return (
    <UserProfile
      user={(userInfo && userInfo[0]) || user}
      shoutouts={userShoutouts || (!userId && shoutouts)}
      fetching={fetching}
    />
  );
};

export default connect(
  state => ({
    user: state.slack.user,
    shoutouts: state.shoutouts.profileShoutouts,
    userShoutouts: state.shoutouts.userShoutouts,
    fetching: state.shoutouts.fetching,
    members: state.team.members,
  }),
  { getProfileShoutouts }
)(UserProfileView);
