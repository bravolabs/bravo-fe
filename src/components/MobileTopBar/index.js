import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../styling/atoms/SVGs/Logo';
import UIColors from '../../styling/variables/UIColors';
import HamburgerButton from '../HamburgerButton';
import { TopBarContainer, ItemContainer } from './topbar.styles';
import { toggleSideMenu } from '../../actions/ui';

const TopBar = ({ ui, toggleSideMenu }) => {
  return (
    <TopBarContainer>
      <ItemContainer>
        <HamburgerButton active={ui.sideNavActive} click={toggleSideMenu} />
        <Logo fillColor={UIColors.light} svgWidth="3.2rem" svgHeigth="3.2rem" />
      </ItemContainer>
    </TopBarContainer>
  );
};

export default connect(
  state => ({
    ui: state.ui,
  }),
  {
    toggleSideMenu,
  }
)(TopBar);
