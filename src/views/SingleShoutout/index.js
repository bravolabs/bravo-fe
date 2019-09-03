import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/users';
import { getSingleShoutout } from '../../actions/shoutouts';
import SideNav from '../../components/SideNav';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';

const getUser = async (id, users) => {
  if (users[id]) {
    return users[id];
  } else {
    const res = await getUserInfo(id);
    return res.data;
  }
};

const View = props => {
  useEffect(() => {
    getSingleShoutout(props.match.params.id);
  }, [props.match]);

  useEffect(() => {
    if (props.shoutouts.singleShoutout) {
      getUser(props.shoutouts.singleShoutout.giverSlackId);
      getUser(props.shoutouts.singleShoutout.receiverSlackId);
    }
  }, [props.shoutouts.singleShoutout, props.users]);

  let shoutout = {
    ...props.shoutouts.singleShoutout,
    giver: props.users[props.shoutouts.singleShoutout.giverSlackId] || { name: '...' },
    receiver: props.users[props.shoutouts.singleShoutout.receiverSlackId] || { name: '...' },
  };
  return (
    <>
      <SideNav />
      <Shoutout shoutout={shoutout} />
    </>
  );
};

const Shoutout = props => {
  const { giver, receiver, message, created_at } = props.shoutout;
  const timeString = moment(created_at).fromNow();
  return (
    <ShoutoutCard
      praiseGiver={giver.name || ''}
      praiseTaker={receiver.name || ''}
      time={timeString || ''}
      praiseText={message || ''}
    />
  );
};

export default connect(
  state => ({
    users: state.users.users,
    shoutouts: state.shoutouts,
  }),
  { getUserInfo, getSingleShoutout }
)(View);
