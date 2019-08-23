import React from 'react';

import { CardsContainer, TypographicSpacer } from './cards.styles';
import CardItem from './Card';
import clapIcon from '../../assets/clap-icon.png';
import giftIcon from '../../assets/gift-icon.png';
import messageIcon from '../../assets/message-icon.png';

const Cards = () => {
  return (
    <CardsContainer>
      <TypographicSpacer background='#FFF3D1' />
      <CardItem
        icon={clapIcon}
        title="bravo slack bot"
        text="install our slack integration in few simple clicks"
      />
      <TypographicSpacer background='#E6D2F4' />
      <CardItem 
        icon={giftIcon}  
        title="give a bravo" 
        text="select receiver, write your text, send" 
      />
      <TypographicSpacer background='#E9C7C7' />
      <CardItem
        icon={messageIcon}
        title="receive a bravo"
        text="get notification when someone sends you a bravo"
      />
    </CardsContainer>
  );
};

export default Cards;
