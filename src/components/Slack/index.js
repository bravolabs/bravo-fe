import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'querystring';

import { getSlackToken } from '../../actions/slack';
import bravoParty from '../../assets/bravo-party.svg';
import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import SideNav from '../SideNav';

const Slack = props => {
  const {
    location: { search },
    getSlackToken,
    slack,
  } = props;
  const redirectURI = `${document.location.origin}/slack`;
  // Parse slack temporary code in URL
  const parsed = qs.parse(search);
  const { '?code': code } = parsed;

  useEffect(() => {
    if (code) {
      getSlackToken(code, redirectURI);
    }
  }, [getSlackToken, code, redirectURI]);

  return (
    <React.Fragment>
      <SideNav />
      {slack.loading && <DisplayCard header={<Loader />} text="Loading your Profile" />}
      {slack.user && (
        <DisplayCard
          header={<img src={bravoParty} alt="bravo party" />}
          text="You have successfully installed bravo slack app"
        />
      )}
      {slack.error && (
        <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={slack.error} />
      )}
    </React.Fragment>
  );
};

export default connect(
  state => state,
  { getSlackToken }
)(Slack);
