import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from '../Avatar';

const SideNav = () => {
  return (
    <SideNavContainer>
      <Link to="/">
        <img src={bravoWhite} alt="Bravo" />
      </Link>
      <Avatar src={bravoWhite} alt="user-avatar" />
    </SideNavContainer>
  );
};

export default connect(
  state => state,
  null
)(SideNav);
