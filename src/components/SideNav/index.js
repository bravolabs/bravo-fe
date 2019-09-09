import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bravoWhite from '../../assets/bravo-white.svg';
import { SideNavContainer } from './sidenav.styles';
import Avatar from '../Avatar';
import SideNavMenu from '../SideNavMenu';
import TooltipLight from '../Tooltip/Light';

const SideNav = props => {
  const { slack } = props;
  return (
    <SideNavContainer>
      <TooltipLight text="testing" face="down">
        <Link to="/">
          <img src={bravoWhite} alt="Bravo" />
        </Link>
      </TooltipLight>
      {/* { slack.isLoggedIn && <SideNavMenu /> } */}
      <Link to={slack.isLoggedIn && "/user"}>
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
