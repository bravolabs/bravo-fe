import React from 'react';

import { CardItem, Icon, Title, CardText } from './cards.styles';

const Card = props => {
  const { icon, title, text } = props;
  return (
    <CardItem>
      <Icon src={icon} />
      <Title>{title}</Title>
      <CardText>{text}</CardText>
    </CardItem>
  );
};

export default Card;
