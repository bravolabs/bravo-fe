import React from 'react';

import MenuButton from './MenuButton';
import { MenuContainer } from './sideNavMenu.styles';
import teamIcon from '../../assets/team-icon.png';
import confettiIcon from '../../assets/confetti-icon.png';

const SideNavMenu = () => {
    return (
        <MenuContainer>
            <MenuButton img={teamIcon} path='/team' />
            <MenuButton img={confettiIcon} path='/confetti' />
        </MenuContainer>
    );
  };

export default SideNavMenu;
