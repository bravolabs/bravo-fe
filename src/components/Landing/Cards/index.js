import React from 'react';

import { CardsContainer } from './cards.styles';
import Card from './Card';
import clapIcon from '../../../assets/clap-icon.png';
import giftIcon from '../../../assets/gift-icon.png';
import messageIcon from '../../../assets/message-icon.png';

const Cards = () => {
  return (
    <CardsContainer>
      <Card
        icon={clapIcon}
        title="bravo slack bot"
        text="install our slack integration in few simple clicks"
      />
      <Card icon={giftIcon} title="give a bravo" text="select receiver, write your text, send" />
      <Card
        icon={messageIcon}
        title="receive a bravo"
        text="get notification when someone sends you a bravo"
      />
    </CardsContainer>
  );
};

export default Cards;
