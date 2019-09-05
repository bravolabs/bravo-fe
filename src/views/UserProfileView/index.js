import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/UserProfile';

const UserProfileView = props => {
  const { user } = props;

  return <UserProfile user={user} />;
};

export default connect(
  state => ({
    user: state.slack.user,
  }),
  null
)(UserProfileView);
