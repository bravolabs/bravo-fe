import React from 'react';

import { CardsContainer } from './cards.styles';
import clapIcon from '../../assets/clap-icon.png';
import giftIcon from '../../assets/gift-icon.png';
import messageIcon from '../../assets/message-icon.png';
import CardItem from './HomeCard';

const HomeCards = () => {
  return (
    <CardsContainer>
      <CardItem
        icon={clapIcon}
        title="bravo slack bot"
        text="install our slack integration in few simple clicks"
        borderColor="#FFF3D1"
      />
      <CardItem
        icon={giftIcon}
        title="give a bravo"
        text="select receiver, write your text, send"
        borderColor="#E6D2F4"
      />
      <CardItem
        icon={messageIcon}
        title="receive a bravo"
        text="get notification when someone sends you a bravo"
        borderColor="#E9C7C7"
      />
    </CardsContainer>
  );
};

export default HomeCards;
