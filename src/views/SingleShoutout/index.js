import React, { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getUserInfo } from '../../actions/users';
import { getSingleShoutout } from '../../actions/shoutouts';
import { getComments } from '../../actions/comments';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';
import CommentSection from '../../components/CommentSection';

const View = ({ shoutout, comments, getSingleShoutout, getComments, match }) => {
  const id = match.params.id || null;
  const getUser = async (id, users) => {
    if (props.users[id]) {
      return props.users[id];
    } else {
      return props.getUserInfo(id);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleShoutout(id);
    }
  }, [getSingleShoutout, id]);

  useEffect(() => {
    if (id) {
      getComments(id);
    }
  }, [getComments, id]);

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
    <>
      <ShoutoutCard
        praiseGiver={giver.name || ''}
        giverAvatar={giver.avatar || ''}
        praiseTaker={receiver.name || ''}
        receiverAvatar={receiver.avatar || ''}
        time={timeString || ''}
        praiseText={message || ''}
      />
      <CommentSection />
    </>
  );
};

export default connect(
  state => ({
    users: state.users.users,
    shoutout: state.shoutouts.singleShoutout,
    comments: state.comments.comments,
  }),
  { getUserInfo, getSingleShoutout, getComments }
)(View);
