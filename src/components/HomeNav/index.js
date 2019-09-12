import React from 'react';

import { NavContainer, LogoContainer, Logo, NavText } from './nav.styles';
import logoImg from '../../assets/bravo-logo.png';
import { SignInWithSlack } from '../SlackButton';

const HomeNav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logoImg} alt="Bravo logo" />
        <NavText>bravo</NavText>
      </LogoContainer>
      <SignInWithSlack />
    </NavContainer>
  );
};

export default HomeNav;
