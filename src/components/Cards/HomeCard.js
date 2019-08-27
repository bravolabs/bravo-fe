import React from 'react';
import { Icon, Title, CardText, StyledCard } from './cards.styles';
import ShapeStyles from '../../styling/variables/ShapeStyles';

const CardItem = props => {
  const { icon, title, text, borderColor } = props;
  return (
    <StyledCard borderColor={borderColor} shadow={ShapeStyles.elevation.regular}>
      <Icon src={icon} />
      <Title>{title}</Title>
      <CardText>{text}</CardText>
    </StyledCard>
  );
};

export default CardItem;
