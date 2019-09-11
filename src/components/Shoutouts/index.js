import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { ShoutoutsContainer, Title, CardContainer } from './shoutouts.styles';
import { getProfileShoutouts } from '../../actions/shoutouts';
import Loader from '../Loader';
import ShoutoutCard from '../ShoutoutCard/ShoutoutCard';
import DisplayCard from '../Cards/DisplayCard';

const Shoutouts = ({ shoutouts, fetching, message, getProfileShoutouts }) => {
  useEffect(() => {
    if (!shoutouts) {
      getProfileShoutouts();
    }
  }, [shoutouts, getProfileShoutouts]);

  return (
    <ShoutoutsContainer>
      <Title>Shoutouts</Title>
      <CardContainer>
        {fetching && <Loader />}
        {shoutouts &&
          shoutouts.map(shoutout => (
            <ShoutoutCard
              margin={shoutoutMargin}
              praiseGiver={shoutout.giverName}
              giverAvatar={shoutout.giverAvatar}
              praiseTaker={shoutout.receiverName}
              receiverAvatar={shoutout.receiverAvatar}
              praiseText={shoutout.message}
              time={moment(shoutout.created_at).fromNow()}
              key={shoutout.id}
            />
          ))}
        {message && <DisplayCard header={<img src={``} alt="bravo party" />} text={message} />}
      </CardContainer>
    </ShoutoutsContainer>
  );
};

export default connect(
  state => ({
    shoutouts: state.shoutouts.profileShoutouts,
    fetching: state.shoutouts.fetching,
    message: state.shoutouts.error,
  }),
  { getProfileShoutouts }
)(Shoutouts);
