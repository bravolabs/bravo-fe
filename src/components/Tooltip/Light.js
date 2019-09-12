import React from 'react';
import Tooltip from './index';
import FontColors from '../../styling/variables/FontColors';
import UIColors from '../../styling/variables/UIColors';

const TooltipDark = props => {
  return <Tooltip bgColor={UIColors.white} color={FontColors.Medium} {...props} />;
};

export default TooltipDark;
