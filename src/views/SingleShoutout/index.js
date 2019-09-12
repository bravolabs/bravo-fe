import React, { useEffect, useCallback } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getSingleShoutout } from '../../actions/shoutouts';
import { getComments } from '../../actions/comments';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';
import CommentSection from '../../components/CommentSection';
import Loader from '../../components/Loader';
import DisplayCard from '../../components/Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';

const View = ({ shoutout, comments, getSingleShoutout, getComments, match, fetching, error }) => {
  const id = match.params.id || null;

  const getInfo = useCallback(
    async id => {
      await getSingleShoutout(id);
      await getComments(id);
    },
    [getSingleShoutout, getComments]
  );
  useEffect(() => {
    if (id) {
      getInfo(id);
    }
  }, [id, getInfo]);

  return (
    <>
      {fetching && <Loader />}
      {shoutout && (
        <ShoutoutCard
          praiseGiver={shoutout.giverName}
          giverAvatar={shoutout.giverAvatar}
          praiseTaker={shoutout.receiverName}
          receiverAvatar={shoutout.receiverAvatar}
          praiseText={shoutout.message}
          time={moment(shoutout.created_at).fromNow()}
        />
      )}
      {error && <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={error} />}
      {comments && <CommentSection comments={comments} />}
    </>
  );
};

export default connect(
  state => ({
    shoutout: state.shoutouts.singleShoutout,
    fetching: state.shoutouts.fetching,
    error: state.shoutouts.error,
    comments: state.comments.comments,
  }),
  { getSingleShoutout, getComments }
)(View);
