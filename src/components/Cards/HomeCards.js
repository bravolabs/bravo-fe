import React from 'react';

import { CardsContainer } from './cards.styles';
import clapIcon from '../../assets/clap-icon.svg';
import giftIcon from '../../assets/gift-icon.svg';
import confetti from '../../assets/confetti.svg';
import CardItem from './HomeCard';

const HomeCards = () => {
  return (
    <CardsContainer>
      <CardItem
        icon={clapIcon}
        title="install bravo"
        text="install our slack integration in few simple clicks"
        borderColor="#FFF3D1"
      />
      <CardItem
        icon={confetti}
        title="send a shoutout"
        text="select a teammate, write your message, click send"
        borderColor="#E6D2F4"
      />
      <CardItem
        icon={giftIcon}
        title="receive a shoutout"
        text="get a notification when someone sent you a shoutout"
        borderColor="#E9C7C7"
      />
    </CardsContainer>
  );
};

export default HomeCards;
