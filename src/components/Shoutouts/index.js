import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ShoutoutsContainer, Title, CardContainer, SubTitle } from './shoutouts.styles';
import { getShoutoutsFeed } from '../../actions/shoutouts';
import Loader from '../Loader';
import PaginationBar from '../PaginationBar';
import ShoutoutCard from '../ShoutoutCard/ShoutoutCard';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';

const shoutoutMargin = '20px auto 15px 200px';

const Shoutouts = ({ shoutouts, fetching, message, getShoutoutsFeed, previous, next }) => {
  const currentPage = (previous && previous + 1) || (next && next - 1) || 1;
  useEffect(() => {
    getShoutoutsFeed(currentPage);
  }, [getShoutoutsFeed, currentPage]);

  return (
    <ShoutoutsContainer>
      <Title>Shoutouts Feed</Title>
      <SubTitle>Catch up on the most recent shoutouts.</SubTitle>
      {shoutouts && (
        <PaginationBar
          moveToPage={getShoutoutsFeed}
          previous={previous}
          next={next}
          current={currentPage}
        />
      )}
      <CardContainer>
        {fetching && <Loader />}
        {shoutouts &&
          shoutouts.map(shoutout => (
            <Link key={shoutout.id} to={`/shoutouts/${shoutout.id}`}>
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
      </CardContainer>
      {shoutouts && (
        <PaginationBar
          moveToPage={getShoutoutsFeed}
          previous={previous}
          next={next}
          current={currentPage}
        />
      )}
    </ShoutoutsContainer>
  );
};

export default connect(
  state => ({
    shoutouts: state.shoutouts.shoutoutsFeed.data,
    previous: state.shoutouts.shoutoutsFeed.previousPage,
    next: state.shoutouts.shoutoutsFeed.nextPage,
    fetching: state.shoutouts.fetching,
    message: state.shoutouts.error,
  }),
  { getShoutoutsFeed }
)(Shoutouts);
