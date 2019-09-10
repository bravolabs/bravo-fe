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
  useEffect(() => {
    if (!shoutouts) {
      getProfileShoutouts();
    }
  }, []);
  return <UserProfile user={user} shoutouts={shoutouts} />;
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
