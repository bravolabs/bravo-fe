import React from 'react';

import { SignInWithSlack } from '../SlackButton';
import { NavContainer, LogoContainer, Logo, NavText } from './nav.styles';
import logoImg from '../../../assets/bravo-logo.png';

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logoImg} />
        <NavText>bravo</NavText>
      </LogoContainer>
      <SignInWithSlack />
    </NavContainer>
  );
};

export default Nav;
