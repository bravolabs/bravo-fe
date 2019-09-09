import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/users';
import { getSingleShoutout } from '../../actions/shoutouts';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';

const View = props => {
  const getUser = async (id, users) => {
    if (props.users[id]) {
      return props.users[id];
    } else {
      return props.getUserInfo(id);
    }
  };

  useEffect(() => {
    props.getSingleShoutout(props.match.params.id);
  }, []);

  useEffect(() => {
    if (props.shoutouts.singleShoutout) {
      getUser(props.shoutouts.singleShoutout.giverSlackId);
      getUser(props.shoutouts.singleShoutout.receiverSlackId);
    }
  }, [props.shoutouts.singleShoutout]);
  let shoutout = null;
  try {
    shoutout = {
      ...props.shoutouts.singleShoutout,
      giver: props.users[props.shoutouts.singleShoutout.giverSlackId] || { name: '...' },
      receiver: props.users[props.shoutouts.singleShoutout.receiverSlackId] || { name: '...' },
    };
  } catch (error) {}
  return shoutout ? <Shoutout shoutout={shoutout} /> : null;
};

const Shoutout = props => {
  const { giver, receiver, message, created_at } = props.shoutout;
  const timeString = moment(created_at).fromNow();
  return (
    <ShoutoutCard
      praiseGiver={giver.name || ''}
      giverAvatar={giver.avatar || ''}
      praiseTaker={receiver.name || ''}
      receiverAvatar={receiver.avatar || ''}
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
