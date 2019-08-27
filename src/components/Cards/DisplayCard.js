import React from 'react';
import shapeStyles from '../../styling/variables/ShapeStyles';
import { BodyText } from '../../styling/atoms/Fonts';
import { DisplayCardContainer } from './cards.styles';

const DisplayCard = ({ header, text }) => {
  return (
    <DisplayCardContainer shadow={shapeStyles.elevation.regular}>
      <section>{header}</section>
      <BodyText>{text}</BodyText>
    </DisplayCardContainer>
  );
};

export default DisplayCard;
