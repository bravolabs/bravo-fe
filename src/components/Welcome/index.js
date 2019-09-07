import React from 'react';

import bravoParty from '../../assets/bravo-party.svg';
import DisplayCard from '../Cards/DisplayCard';
import SideNav from '../SideNav';

const Welcome = props => {
  return (
    <React.Fragment>
      <SideNav />
      <DisplayCard
        header={<img src={bravoParty} alt="bravo party" />}
        text="Welcome! You have successfully signed in!"
      />
      }
    </React.Fragment>
  );
};

export default Welcome;
