import React from 'react';

import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';
import { ProfileHeader, ProfileBody } from './userProfile.styles';

const shoutoutMargin = '20px auto 15px 200px';

const UserProfile = () => {
  return (
      <>
        <ProfileHeader>

        </ProfileHeader>
        <ProfileBody>
            <ShoutoutCard 
                margin={shoutoutMargin}
                praiseGiver='Aaron Thompson' 
                praiseTaker='Noble Obioma' 
                time='2 hours ago' 
                praiseText='Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was.' 
            />
            <ShoutoutCard 
                margin={shoutoutMargin}
                praiseGiver='Aaron Thompson' 
                praiseTaker='Noble Obioma' 
                time='2 hours ago' 
                praiseText='Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was.' 
            />
        </ProfileBody>
      </>
    );
};

export default UserProfile;
