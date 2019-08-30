import React from 'react';
import { connect } from 'react-redux';

import SideNav from '../../components/SideNav';
import UserProfile from '../../components/UserProfile';

const UserProfileView = props => {
  const { user } = props;

  return (
      <>
        <SideNav />
        <UserProfile user={user} />
      </>
    );
};

export default connect(
  state => ({
    user: state.slack.user,
  }),
  null
)(UserProfileView);
