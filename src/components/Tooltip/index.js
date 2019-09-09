import React from 'react';
import { TooltipWrapper, Tooltip as TooltipContainer } from '../../styling/atoms/Tooltip';

const Tooltip = props => {
  const { face, position, color, text } = props;

  const borderColor = (() => {
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
};

export default Tooltip;
