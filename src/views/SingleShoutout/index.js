import React from 'react';

import SideNav from '../../components/SideNav';
import { ShoutoutCard, Emoji, AvatarsContainer, Time, ShoutoutText } from './shoutout.styles';
import User from '../../components/User';
import confetti from '../../assets/confetti.png';
import placeholder from '../../assets/placeholder.png';

const Shoutout = () => {
  return (
      <>
        <SideNav />
        <ShoutoutCard>
            <AvatarsContainer>
                <User img={placeholder} name={'Aaron Thompson'} />
                <Emoji src={confetti} />
                <User img={placeholder} name={'Noble Obioma'} />
                <Time>2 hours ago</Time>
            </AvatarsContainer>
            <ShoutoutText>
              Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was. 
            </ShoutoutText>  
        </ShoutoutCard>
      </>
    );
};

export default Shoutout;
