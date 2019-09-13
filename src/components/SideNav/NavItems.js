import React from 'react';
import { NavItemsContainer } from './sidenav.styles';
import NavItem from './NavItem';
import homeIcon from '../../assets/home.png';
import teamIcon from '../../assets/team.png';
import leaderboardIcon from '../../assets/trophy.png';
import shoutoutIcon from '../../assets/confetti.png';

const NavItems = () => {
  return (
    <NavItemsContainer>
      <NavItem icon={homeIcon} link="/profile" label="Profile" />
      <NavItem icon={shoutoutIcon} link="/shoutouts" label="Shoutouts" />
      <NavItem icon={leaderboardIcon} link="/leaderboard" label="Board" />
      <NavItem icon={teamIcon} link="/team" label="Team" />
    </NavItemsContainer>
  );
};

export default NavItems;
