import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ShoutoutsContainer, Title, CardContainer } from './shoutouts.styles';
import { getProfileShoutouts } from '../../actions/shoutouts';

const Shoutouts = ({ shoutouts, fetching, message, getProfileShoutouts }) => {
  useEffect(() => {
    if (!shoutouts) {
      getProfileShoutouts();
    }
  }, [shoutouts, getProfileShoutouts]);

  return (
    <ShoutoutsContainer>
      <Title>Shoutouts</Title>
      <CardContainer></CardContainer>
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
