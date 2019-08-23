import React from 'react';
import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { Icon, Title, CardText } from './cards.styles';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CardItem = props => {
  const { icon, title, text } = props;
  return (
    <StyledCard>
      <Icon src={icon} />
      <Title>{title}</Title>
      <CardText>{text}</CardText>
    </StyledCard>
  );
};

export default CardItem;
