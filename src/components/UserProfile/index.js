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
        {shoutouts &&
          shoutouts.map(shoutout => (
            <ShoutoutCard
              margin={shoutoutMargin}
              praiseGiver={shoutout.giverName}
              giverAvatar={shoutout.giverAvatar}
              praiseTaker={shoutout.receiverName}
              receiverAvatar={shoutout.receiverAvatar}
              praiseText={shoutout.message}
              time={shoutout.created_at}
            />
          ))}
      </ProfileBody>
    </>
  );
};

export default UserProfile;
