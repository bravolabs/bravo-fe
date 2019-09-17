import React from 'react';
import { NavIcon } from './sidenav.styles';

const NavItem = ({ icon, link, label }) => {
  return (
    <NavIcon to={link || '#'}>
      <div>{/* Navlink active  indicator */}</div>
      <i>
        <img src={icon} alt={link} />
      </i>
      {label && <ComponentTitle>{label}</ComponentTitle>}
    </NavIcon>
  );
};

export default NavItem;
