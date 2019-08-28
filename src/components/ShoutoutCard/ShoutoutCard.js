import React from 'react';

import { ShoutoutCardContainer, Emoji, AvatarsContainer, Time, ShoutoutText } from './shoutout.styles';
import User from '../User';
import confetti from '../../assets/confetti.png';
import placeholder from '../../assets/placeholder.png';

const ShoutoutCard = () => {
  return (
        <ShoutoutCardContainer>
            <AvatarsContainer>
                <User img={placeholder} name={'Aaron Thompson'} />
                <Emoji src={confetti} />
                <User img={placeholder} name={'Noble Obioma'} />
                <Time>2 hours ago</Time>
            </AvatarsContainer>
            <ShoutoutText>
              Huge shoutout to Noble for his work on the Technical research! I was blow away by how detailed oriented the whole thing was. 
            </ShoutoutText>  
        </ShoutoutCardContainer>
    );
};

export default ShoutoutCard;
