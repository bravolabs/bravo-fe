import React from 'react';
import { connect } from 'react-redux';
import { getProfileShoutouts } from '../../actions/shoutouts';

import UserProfile from '../../components/UserProfile';

const UserProfileView = ({ user, shoutouts }) => {
  return <UserProfile user={user} shoutouts={shoutouts} />;
};

export default connect(
  state => ({
    user: state.slack.user,
    shoutouts: state.shoutouts.profileShoutouts,
  }),
  { getProfileShoutouts }
)(UserProfileView);
