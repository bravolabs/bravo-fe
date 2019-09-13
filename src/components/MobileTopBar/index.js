import React from 'react';
import Logo from '../../styling/atoms/SVGs/Logo';
import UIColors from '../../styling/variables/UIColors';
import { TopBarContainer } from './topbar.styles';

const TopBar = props => {
  return (
    <TopBarContainer>
      <Logo fillColor={UIColors.light} svgWidth="3.2rem" svgHeigth="3.2rem" />
    </TopBarContainer>
  );
};

export default TopBar;
