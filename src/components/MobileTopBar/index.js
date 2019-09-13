import React from 'react';
import Logo from '../../styling/atoms/SVGs/Logo';
import UIColors from '../../styling/variables/UIColors';
import HamburgerButton from '../HamburgerButton';
import { TopBarContainer, ItemContainer } from './topbar.styles';

const TopBar = props => {
  return (
    <TopBarContainer>
      <ItemContainer>
        <HamburgerButton />
        <Logo fillColor={UIColors.light} svgWidth="3.2rem" svgHeigth="3.2rem" />
      </ItemContainer>
    </TopBarContainer>
  );
};

export default TopBar;
