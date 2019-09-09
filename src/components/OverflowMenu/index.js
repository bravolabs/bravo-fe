import React from 'react';
import { MenuContainer, MenuItem } from '../../styling/atoms/OverflowMenu';
import UIColors from '../../styling/variables/UIColors';
import FontColors from '../../styling/variables/FontColors';
import ShapeStyles from '../../styling/variables/ShapeStyles';

export const OverflowMenu = props => {
  const { x, y, transform } = props;
  return (
    <MenuContainer shadow={ShapeStyles.elevation} x={x} y={y} transform={transform}>
      {props.children}
    </MenuContainer>
  );
};

export const OverflowItem = props => {};
