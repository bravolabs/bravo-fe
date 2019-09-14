import React from 'react';
import moment from 'moment';

import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';
import User from '../../components/User';
import { ProfileHeader, ProfileBody, ShoutoutsButton, Emoji } from './userProfile.styles';
import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';
import placeholder from '../../assets/placeholder.png';
import confetti from '../../assets/confetti.png';

const shoutoutMargin = '20px auto 15px 200px';

const UserProfile = ({ user, shoutouts, fetching, message }) => {
  return (
    <>
      <ProfileHeader>
        <User
          size="user-profile"
          img={user ? user.avatar : placeholder}
          alt={user && user.name}
          name={user && user.name}
        />
        <ShoutoutsButton>
          <Emoji src={confetti} alt="given" />
          Given
        </ShoutoutsButton>
        <ShoutoutsButton>
          <Emoji src={confetti} alt="given" />
          Received
        </ShoutoutsButton>
      </ProfileHeader>
      <ProfileBody>
        {fetching && <Loader />}
        {shoutouts &&
          shoutouts.map(shoutout => (
            <ShoutoutCard
              id={shoutout.id}
              key={shoutout.id}
              margin={shoutoutMargin}
              praiseGiver={shoutout.giverName}
              giverAvatar={shoutout.giverAvatar}
              praiseTaker={shoutout.receiverName}
              receiverAvatar={shoutout.receiverAvatar}
              praiseText={shoutout.message}
              time={moment(shoutout.created_at).fromNow()}
            />
          ))}
        {message && (
          <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={message} />
        )}
      </ProfileBody>
    </>
  );
};

export default UserProfile;
