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
  const { praiseGiver, giverAvatar, receiverAvatar, praiseTaker, time, praiseText, hover } = props;

  return (
    <ShoutoutCardContainer hover={hover}>
      <AvatarsContainer>
        <User avatar={giverAvatar || placeholder} name={praiseGiver} />
        <Emoji src={confetti} />
        <User avatar={receiverAvatar || placeholder} name={praiseTaker} />
        <Time className="time">{time}</Time>
      </AvatarsContainer>
      <ShoutoutText>{praiseText}</ShoutoutText>
      <Time className="mobile-time">{time}</Time>
    </ShoutoutCardContainer>
  );
};

export default ShoutoutCard;
