import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from '../Avatar';
import SideNavMenu from '../SideNavMenu';

const SideNav = ({ menu }) => {
  return (
    <SideNavContainer>
      <Link to="/">
        <img src={bravoWhite} alt="Bravo" />
      </Link>
      { menu === 'true' && <SideNavMenu /> }
      <Avatar src={bravoWhite} alt="user-avatar" />
    </SideNavContainer>
  );
};

export default connect(
  state => state,
  null
)(SideNav);
