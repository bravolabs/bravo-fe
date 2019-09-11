import React from 'react';
import { NavItemsContainer } from './sidenav.styles';
import NavItem from './NavItem';
import homeIcon from '../../assets/home-icon.svg';
import teamIcon from '../../assets/team-icon.svg';
import leaderboardIcon from '../../assets/leaderboard-icon.svg';
import shoutoutIcon from '../../assets/shoutout-icon.svg';

const NavItems = () => {
  return (
    <NavItemsContainer>
      <NavItem icon={homeIcon} link="/profile" />
      <NavItem icon={shoutoutIcon} />
      <NavItem icon={leaderboardIcon} />
      <NavItem icon={teamIcon} link="/team" />
    </NavItemsContainer>
  );
};

export default NavItems;
