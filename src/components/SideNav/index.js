import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from './Avatar';
import NavItems from './NavItems';
import logoutIcon from '../../assets/logout-icon.svg';
import NavItem from './NavItem';
import localstorage from '../../utils/localstorage';

const SideNav = props => {
  const { slack } = props;
  return (
    <SideNavContainer>
      <Link to="/">
        <img src={bravoWhite} alt="Bravo" />
      </Link>
      {slack.isLoggedIn && <NavItems />}
      {slack.installSuccess && <Avatar src={slack.user.avatar} alt="user-avatar" />}
      {slack.isLoggedIn && (
        <NavItem icon={logoutIcon} label="Logout" link="/logout" fn={() => localstorage.clear()} />
      )}
    </SideNavContainer>
  );
};

export default connect(
  state => ({
    slack: state.slack,
  }),
  null
)(SideNav);
