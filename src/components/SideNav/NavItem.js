import React from 'react';
import { NavIcon } from './sidenav.styles';

const NavItem = ({ icon, link, label, fn }) => {
  return (
    <NavIcon to={link || '#'} onClick={fn}>
      <div></div>
      <i>
        <img src={icon} alt={link} />
      </i>
      {label && <span>{label}</span>}
    </NavIcon>
  );
};

export default NavItem;
