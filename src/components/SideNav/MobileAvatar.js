import React from 'react';
import Link from '../UnstyledLink';
import { ExtraInfo, ComponentTitle } from '../../styling/atoms/Fonts';
import { MobileAvatarContainer } from './sidenav.styles';
import Avatar from '../Avatars';

const MobileAvatar = ({ avatar, userId, name, link }) => {
  return (
    <Link to={link}>
      <MobileAvatarContainer>
        <Avatar avatar={avatar} seed={name} />
        <ComponentTitle>{name}</ComponentTitle>
        <ExtraInfo>View Profile</ExtraInfo>
      </MobileAvatarContainer>
    </Link>
  );
};

export default MobileAvatar;
