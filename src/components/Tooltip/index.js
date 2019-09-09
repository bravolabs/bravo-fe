import React from 'react';
import { TooltipWrapper, Tooltip as TooltipContainer } from '../../styling/atoms/Tooltip';
import { UIItem } from '../../styling/atoms/Fonts';
import ShapeStyles from '../../styling/variables/ShapeStyles';

const Tooltip = props => {
  let { face, bgColor, color, text, margin } = props;
  face = face || 'right';
  margin = margin || 0;
  const FacedTooltip = (() => {
    switch (face) {
      case 'left':
        return TooltipLeft;
      case 'right':
        return TooltipRight;
      case 'up':
        return TooltipUp;
      case 'down':
        return TooltipDown;
      default:
        return TooltipRight;
    }
  })();

  return (
    <TooltipWrapper>
      {props.children}
      <FacedTooltip bgColor={bgColor} color={color} text={text} margin={margin} />
    </TooltipWrapper>
  );
};

const TooltipLeft = props => {
  const { bgColor, color, text, margin } = props;
  return (
    <TooltipContainer
      shadow={ShapeStyles.elevation.elevate}
      y="50%"
      transform={`translateX(-100%) translateY(-50%) translateX(${-(8 + margin)}px)`}
      background={bgColor}
      color={color}
      borderColor={`transparent transparent transparent ${bgColor}`}
      arrowY="50%"
      arrowX="100%"
      arrowTransform="translateY(-50%)">
      <UIItem color={color}>{text}</UIItem>
    </TooltipContainer>
  );
};

const TooltipRight = props => {
  const { bgColor, color, text, margin } = props;
  return (
    <TooltipContainer
      shadow={ShapeStyles.elevation.elevate}
      x="100%"
      y="50%"
      transform={`translateY(-50%) translateX(${8 + margin}px)`}
      background={bgColor}
      color={color}
      borderColor={`transparent ${bgColor} transparent transparent`}
      arrowY="50%"
      arrowTransform="translateX(-100%) translateY(-50%)">
      <UIItem color={color}>{text}</UIItem>
    </TooltipContainer>
  );
};

const TooltipUp = props => {
  const { bgColor, color, text } = props;
  return (
    <TooltipContainer
      shadow={ShapeStyles.elevation.elevate}
      x="50%"
      y="0%"
      transform="translateX(-50%) translateY(-100%)"
      background={bgColor}
      color={color}
      borderColor={`${bgColor} transparent transparent transparent`}
      arrowX="50%"
      arrowY="100%"
      arrowTransform="translateX(-50%)">
      <UIItem color={color}>{text}</UIItem>
    </TooltipContainer>
  );
};

const TooltipDown = props => {
  const { bgColor, color, text } = props;
  return (
    <TooltipContainer
      shadow={ShapeStyles.elevation.elevate}
      x="50%"
      y="100%"
      transform="translateX(-50%)"
      background={bgColor}
      color={color}
      borderColor={`transparent transparent ${bgColor} transparent`}
      arrowX="50%"
      arrowTransform="translateX(-50%) translateY(-100%)">
      <UIItem color={color}>{text}</UIItem>
    </TooltipContainer>
  );
};

export default Tooltip;
