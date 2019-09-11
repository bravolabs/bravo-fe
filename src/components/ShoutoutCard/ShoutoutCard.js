import React from 'react';
import {
  ShoutoutCardContainer,
  Emoji,
  AvatarsContainer,
  Time,
  ShoutoutText,
  ViewContainer,
  ViewButton,
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

  const addViewAction = () => {
    if (id) {
      document.querySelector(`#view-${id}`).style.display = 'flex';
    }
  };

  return (
    <ShoutoutCardContainer margin={margin} onMouseEnter={addViewAction} onClick={addViewAction}>
      <AvatarsContainer>
        <User img={giverAvatar || placeholder} name={praiseGiver} />
        <Emoji src={confetti} />
        <User img={receiverAvatar || placeholder} name={praiseTaker} />
        <Time>{time}</Time>
      </AvatarsContainer>
      <ShoutoutText>{praiseText}</ShoutoutText>
      {id && (
        <ViewContainer id={`view-${id}`}>
          <ViewButton>View shoutout</ViewButton>
        </ViewContainer>
      )}
    </ShoutoutCardContainer>
  );
};

export default ShoutoutCard;
