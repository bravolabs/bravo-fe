import React from 'react';

import { ShoutoutCardContainer, Emoji, AvatarsContainer, Time, ShoutoutText } from './shoutout.styles';
import User from '../User';
import confetti from '../../assets/confetti.png';
import placeholder from '../../assets/placeholder.png';

const ShoutoutCard = ({ praiseGiver, praiseTaker, time, praiseText }) => {
  return (
        <ShoutoutCardContainer>
            <AvatarsContainer>
                <User img={placeholder} name={praiseGiver} />
                <Emoji src={confetti} />
                <User img={placeholder} name={praiseTaker} />
                <Time>{time}</Time>
            </AvatarsContainer>
            <ShoutoutText>
               {praiseText}
            </ShoutoutText>  
        </ShoutoutCardContainer>
    );
};

export default ShoutoutCard;
