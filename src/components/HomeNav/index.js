import React from 'react';

import { NavContainer, LogoContainer, Logo, NavText } from './nav.styles';
import logoImg from '../../assets/bravo-logo.png';

const HomeNav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logoImg} alt="Bravo logo" />
        <NavText>bravo</NavText>
      </LogoContainer>
    </NavContainer>
  );
};

export default HomeNav;
