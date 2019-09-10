import React from 'react';

import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';
import User from '../../components/User';
import { ProfileHeader, ProfileBody, ShoutoutsButton } from './userProfile.styles';
import placeholder from '../../assets/placeholder.png';

const shoutoutMargin = '20px auto 15px 200px';

const UserProfile = ({ user, shoutouts }) => {
  return (
    <>
      <ProfileHeader>
        <User
          size="user-profile"
          img={user ? user.avatar : placeholder}
          alt={placeholder}
          name={user ? user.name : 'Aaron Thompson'}
        />
        <ShoutoutsButton>Shoutouts</ShoutoutsButton>
      </ProfileHeader>
      <ProfileBody>
        <ShoutoutCard
          margin={shoutoutMargin}
          praiseGiver={user ? user.name : 'Aaron Thompson'}
          profilePic={user ? user.avatar : placeholder}
          praiseTaker="Noble Obioma"
          time="2 hours ago"
          praiseText="Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was."
        />
      </ProfileBody>
    </>
  );
};

export default UserProfile;
