import React from 'react';
import shapeStyles from '../../styling/variables/ShapeStyles';
import { BodyText, ExtraInfo } from '../../styling/atoms/Fonts';
import { DisplayCardContainer } from './cards.styles';

const DisplayCard = ({ header, text, error, subText }) => {
  return (
    <DisplayCardContainer shadow={shapeStyles.elevation.regular} error={error}>
      <section>{header}</section>
      <BodyText>{text}</BodyText>
      {subText && (
        <span>
          <ExtraInfo>{subText}</ExtraInfo>
        </span>
      )}
    </DisplayCardContainer>
  );
};

export default DisplayCard;
