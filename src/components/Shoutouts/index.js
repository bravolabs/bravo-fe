import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { ShoutoutsContainer, Title, CardContainer, SubTitle } from './shoutouts.styles';
import { getShoutoutsFeed } from '../../actions/shoutouts';
import Loader from '../Loader';
import PaginationBar from '../PaginationBar';
import ShoutoutCard from '../ShoutoutCard/ShoutoutCard';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';

const shoutoutMargin = '20px auto 15px 200px';

const Shoutouts = ({ shoutouts, fetching, message, getShoutoutsFeed }) => {
  useEffect(() => {
    getShoutoutsFeed();
  }, [getShoutoutsFeed]);

  return (
    <ShoutoutsContainer>
      <Title>Shoutouts Feed</Title>
      <SubTitle>Catch up on the most recent shoutouts.</SubTitle>
      {shoutouts && <PaginationBar fnPrevious={() => null} fnNext={() => null} currentPage="1" />}
      <CardContainer>
        {fetching && <Loader />}
        {shoutouts &&
          shoutouts.map(shoutout => (
            <ShoutoutCard
              id={shoutout.id}
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
        {message && (
          <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={message} />
        )}
      </CardContainer>
      {shoutouts && <PaginationBar fnPrevious={() => null} fnNext={() => null} currentPage="1" />}
    </ShoutoutsContainer>
  );
};

export default connect(
  state => ({
    shoutouts: state.shoutouts.shoutoutsFeed,
    fetching: state.shoutouts.fetching,
    message: state.shoutouts.error,
  }),
  { getShoutoutsFeed }
)(Shoutouts);
