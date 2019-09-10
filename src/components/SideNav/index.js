import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from '../Avatar';
import SideNavMenu from '../SideNavMenu';

const SideNav = props => {
  const { slack } = props;
  return (
    <SideNavContainer>
      <Link to="/">
        <img src={bravoWhite} alt="Bravo" />
      </Link>
      {slack.isLoggedIn && <SideNavMenu />}
      <Link to={(slack.isLoggedIn && '/profile') || '/'}>
        <Avatar src={slack.user ? slack.user.avatar : bravoWhite} alt="user-avatar" />
      </Link>
    </SideNavContainer>
  );
};

export default connect(
  state => ({
    slack: state.slack,
  }),
  null
)(SideNav);
