import React from 'react';

import MenuButton from './MenuButton';
import { MenuContainer } from './sideNavMenu.styles';
import teamIcon from '../../assets/team-icon.svg';
import confettiIcon from '../../assets/confetti-icon.svg';

const SideNavMenu = () => {
  return (
    <MenuContainer>
      <MenuButton img={teamIcon} path="/team" />
      <MenuButton img={confettiIcon} path="/shoutouts" />
    </MenuContainer>
  );
};

export default SideNavMenu;
