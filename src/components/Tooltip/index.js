import React from 'react';
import { TooltipWrapper, Tooltip as TooltipContainer } from '../../styling/atoms/Tooltip';

const Tooltip = props => {
  const { face, position, color, text } = props;
  face = face || 'down';
  const arrowBorderColor = (() => {
    switch (face) {
      case 'left':
        return `transparent ${color} transparent transparent`;
      case 'right':
        return `transparent transparent transparent ${color}`;
      case 'up':
        return `transparent transparent ${color} transparent`;
      case 'down':
        return `${color} transparent transparent transparent`;
      default:
        return `${color} transparent transparent transparent`;
    }
  })();

  const arrowX = (() => {
    switch (face) {
      case 'left':
        return '0%';
      case 'right':
        return '100%';
      default:
        return `50%`;
    }
  })();

  const arrowY = (() => {
    switch (face) {
      case 'up':
        return '0%';
      case 'down':
        return '100%';
      default:
        return `50%`;
    }
  })();

  const arrowTransform = (() => {
    switch (face) {
      case 'left':
        return 'translateX(-100%) translateY(-50%)';
      case 'right':
        return 'translateY(-50%)';
      case 'up':
        return 'translateX(-50%) translateY(-100%)';
      case 'down':
        return 'translateX(-50%)';
      default:
        return `translateX(-50%)`;
    }
  })();
};

const TooltipLeft = props => {
  const { color, text } = props;
  return (
    <TooltipContainer
      borderColor={`transparent ${color} transparent transparent`}
      arrowY="50%"
      transform="translateX(-100%) translateY(-50%)"
    />
  );
};

export default Tooltip;
