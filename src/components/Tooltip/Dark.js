import React from 'react';
import Tooltip from './index';
import FontColors from '../../styling/variables/FontColors';
import UIColors from '../../styling/variables/UIColors';

const TooltipDark = props => {
  return <Tooltip bgColor={FontColors.Dark} color={UIColors.white} {...props} />;
};

export default TooltipDark;
