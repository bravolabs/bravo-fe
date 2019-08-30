import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from '../Avatar';
import SideNavMenu from '../SideNavMenu';

const SideNav = props => {
  const { user } = props;
  console.log(user);
  return (
    <SideNavContainer>
      <Link to="/">
        <img src={bravoWhite} alt="Bravo" />
      </Link>
      { user && <SideNavMenu /> }
      <Link to="/user">
        <Avatar src={user ? user.avatar : bravoWhite} alt="user-avatar" />
      </Link>
    </SideNavContainer>
  );
};

export default connect(
  state => ({
    user: state.slack.user,
  }),
  null
)(SideNav);
