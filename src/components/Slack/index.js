import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'query-string';

import { appInstall, signInWithSlack } from '../../actions/slack';
import bravoParty from '../../assets/bravo-party.svg';
import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import SideNav from '../SideNav';

const Slack = ({ history, location, appInstall, signInWithSlack, slack }) => {
  const goToLocation = location.state ? location.state.from : '/shoutout';
  const redirectURI = `${document.location.origin}/slack`;
  // get code and state('addAppToSlack' or 'resumeSignIn') from slack on URL
  const { code, state } = qs.parse(location.search);

  useEffect(() => {
    if (state === 'addAppToSlack') {
      appInstall(code, redirectURI);
    }
    if (state === 'resumeSignIn') {
      signInWithSlack(code, redirectURI).then(res => {
        if (res) {
          history.push(goToLocation);
        }
      });
    }
  }, [code, state, redirectURI, appInstall, signInWithSlack, history, goToLocation]);

  return state ? (
    <React.Fragment>
      <SideNav />
      {slack.loading && <DisplayCard header={<Loader />} text="Loading your Profile" />}
      {slack.installSuccess && (
        <DisplayCard
          header={<img src={bravoParty} alt="bravo party" />}
          text="You have successfully installed bravo slack app"
        />
      )}
      {slack.error && (
        <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={slack.error} />
      )}
      }
    </React.Fragment>
  ) : (
    <Redirect to="/" />
  );
};

export default connect(
  state => state,
  { appInstall, signInWithSlack }
)(Slack);
