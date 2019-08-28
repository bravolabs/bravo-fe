import React from 'react';

import SideNav from '../../components/SideNav';
import UserProfile from '../../components/UserProfile';

const UserProfileView = () => {
  return (
      <>
        <SideNav menu='true' />
        <UserProfile />
      </>
    );
};

export default UserProfileView;
