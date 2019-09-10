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
}) => {
  const userId = match.params.id || null;
  const userInfo = (userId && members.filter(member => member.id === userId)) || null;

  useEffect(() => {
    if (userId && !userShoutouts) {
      getProfileShoutouts(userId);
    } else if (!shoutouts) {
      getProfileShoutouts();
    }
  }, []);
  return <UserProfile user={userInfo || user} shoutouts={userShoutouts || shoutouts} />;
};

export default connect(
  state => ({
    user: state.slack.user,
    shoutouts: state.shoutouts.profileShoutouts,
    userShoutouts: state.shoutouts.userShoutouts,
    members: state.team.members,
  }),
  { getProfileShoutouts }
)(UserProfileView);
