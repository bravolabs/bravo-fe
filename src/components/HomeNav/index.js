import React from 'react';

import { NavContainer, LogoContainer, Logo, NavText } from './nav.styles';
import logoImg from '../../assets/bravo-logo.png';

const HomeNav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logoImg} />
        <NavText>bravo</NavText>
      </LogoContainer>
    </NavContainer>
  );
};

export default HomeNav;
