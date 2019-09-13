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
      <NavItem icon={homeIcon} link="/profile" label="Home" />
      <NavItem icon={shoutoutIcon} link="/shoutouts" label="Shoutouts" />
      <NavItem icon={leaderboardIcon} link="/leaderboard" label="Leaderboard" />
      <NavItem icon={teamIcon} link="/team" label="Team" />
    </NavItemsContainer>
  );
};

export default NavItems;
