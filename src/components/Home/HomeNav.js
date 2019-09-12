import React from 'react';

import { NavContainer, LogoContainer, Logo, NavText, HomeNavContainer } from './homeNav.styles';
import logoImg from '../../assets/bravo-logo.png';
import { SignInWithSlack } from '../SlackButton';

const HomeNav = () => {
  return (
    <HomeNavContainer>
      <NavContainer>
        <LogoContainer>
          <Logo src={logoImg} alt="Bravo logo" />
          <NavText>bravo</NavText>
        </LogoContainer>
        <SignInWithSlack />
      </NavContainer>
    </HomeNavContainer>
  );
};

export default HomeNav;
