import React from 'react';

import SideNav from '../../components/SideNav';
import ShoutoutCard from '../../components/ShoutoutCard/ShoutoutCard';

const Shoutout = () => {
  return (
      <>
        <SideNav />
        <ShoutoutCard 
          praiseGiver='Aaron Thompson' 
          praiseTaker='Noble Obioma' 
          time='2 hours ago' 
          praiseText='Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was.' 
        />
      </>
    );
};

export default Shoutout;
