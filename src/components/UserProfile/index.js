import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
  const initShoutouts =
    shoutouts &&
    user &&
    shoutouts.filter(item => item.giverName.toLowerCase() === user.name.toLowerCase());

  const [state, setState] = useState({
    active: 'given',
    shoutouts: initShoutouts,
  });

  const handleClick = action => {
    setState(prevState => ({
      ...prevState,
      active: action,
    }));
  };

  const { active } = state;
  const name = user && user.name;

  useEffect(() => {
    const filtered =
      shoutouts &&
      (active === 'given'
        ? shoutouts.filter(item => item.giverName.toLowerCase() === name.toLowerCase())
        : shoutouts.filter(item => item.receiverName.toLowerCase() === name.toLowerCase()));

    setState(prevState => ({
      ...prevState,
      active: active,
      shoutouts: filtered,
    }));
  }, [shoutouts, active, name]);

  return (
    <>
      <ProfileHeader>
        <section>
          <User
            size="user-profile"
            avatar={user ? user.avatar : placeholder}
            alt={user && user.name}
            name={user && user.name}
          />
        </section>
        <nav>
          <ShoutoutsButton
            active={state.active === 'given' ? true : false}
            onClick={() => handleClick('given')}>
            <Emoji src={confetti} alt="given" />
            Given
          </ShoutoutsButton>
          <ShoutoutsButton
            active={state.active === 'received' ? true : false}
            onClick={() => handleClick('received')}>
            <Emoji src={confetti} alt="received" />
            Received
          </ShoutoutsButton>
        </nav>
      </ProfileHeader>
      <ProfileBody>
        {fetching && <Loader />}
        {state.shoutouts &&
          state.shoutouts.map((shoutout, index) => (
            <Link key={`${shoutout.id}-${index}`} to={`/shoutouts/${shoutout.id}`}>
              <ShoutoutCard
                id={shoutout.id}
                margin={shoutoutMargin}
                praiseGiver={shoutout.giverName}
                giverAvatar={shoutout.giverAvatar}
                praiseTaker={shoutout.receiverName}
                receiverAvatar={shoutout.receiverAvatar}
                praiseText={shoutout.message}
                time={moment(shoutout.created_at).fromNow()}
                hover
              />
            </Link>
          ))}
        {message && (
          <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={message} />
        )}
      </ProfileBody>
    </>
  );
};

export default UserProfile;
