import React from 'react';
import {
  ShoutoutCardContainer,
  Emoji,
  AvatarsContainer,
  Time,
  ShoutoutText,
} from './shoutout.styles';
import User from '../User';
import confetti from '../../assets/confetti.png';
import placeholder from '../../assets/placeholder.png';

const ShoutoutCard = props => {
  const {
    id,
    margin,
    praiseGiver,
    giverAvatar,
    receiverAvatar,
    praiseTaker,
    time,
    praiseText,
  } = props;

  return (
    <ShoutoutCardContainer margin={margin}>
      <AvatarsContainer>
        <User img={giverAvatar || placeholder} name={praiseGiver} />
        <Emoji src={confetti} />
        <User img={receiverAvatar || placeholder} name={praiseTaker} />
        <Time>{time}</Time>
      </AvatarsContainer>
      <ShoutoutText>{praiseText}</ShoutoutText>
    </ShoutoutCardContainer>
  );
};

export default ShoutoutCard;
