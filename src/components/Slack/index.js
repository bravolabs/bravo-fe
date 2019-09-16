import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'query-string';

import { appInstall, signInWithSlack } from '../../actions/slack';
import bravoParty from '../../assets/bravo-party.svg';
import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import SideNav from '../SideNav';

const DisplayResponse = ({ success, error, history }) => {
  const [count, updateCount] = useState(5);

  useEffect(() => {
    const interval = window.setInterval(() => {
      updateCount(count - 1);
    }, 1000);
    if (count === 0) {
      history.push('/');
    }
    return () => {
      window.clearInterval(interval);
    };
  }, [count, history]);

  return (
    <DisplayCard
      header={<img src={bravoParty} alt="bravo party" />}
      text={success ? 'You have successfully installed bravo slack app' : error}
      error={error}
      subText={(success || error) && `You will be redirected in ${count}s`}
    />
  );
};
const Slack = ({ history, location, appInstall, signInWithSlack, slack }) => {
  // Get the original target route the user was trying to access if it exists
  const targetRoute = localStorage.getItem('target-route');
  const goToLocation = targetRoute ? targetRoute : '/profile';
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
          // Redirect back to original target route and clean up
          history.push(goToLocation);
          localStorage.removeItem('target-route');
        }
      });
    }
  }, [code, state, redirectURI, appInstall, signInWithSlack, history, goToLocation]);

  return state ? (
    <React.Fragment>
      <SideNav />
      {slack.isLoading && (
        <DisplayCard
          header={<Loader />}
          text={
            state === 'addAppToSlack'
              ? 'Installing Bravo in Slack Workspace...'
              : 'When the work is done, say bravo...'
          }
        />
      )}
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
