import React from 'react';
import moment from 'moment';

import SideNav from '../../components/SideNav';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';

const Shoutout = props => {
  const { giver, receiver, message, created_at } = props.shoutout;
  const timeString = moment(created_at).fromNow();
  return (
    <>
      <SideNav />
      <ShoutoutCard
        praiseGiver={giver.name}
        praiseTaker={receiver.name}
        time={timeString}
        praiseText={message}
      />
    </>
  );
};

export default Shoutout;
