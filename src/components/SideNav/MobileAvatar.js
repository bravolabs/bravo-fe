import React from 'react';
import Link from '../UnstyledLink';
import { ExtraInfo, ComponentTitle } from '../../styling/atoms/Fonts';
import { MobileAvatarContainer } from './sidenav.styles';
import Avatar from '../Avatars';

const MobileAvatar = ({ src, alt, name, link }) => {
  return (
    <Link to={link}>
      <MobileAvatarContainer>
        <Avatar src={src} userId={alt} Color="#1ED760" />
        <ComponentTitle>{name}</ComponentTitle>
        <ExtraInfo>View Profile</ExtraInfo>
      </MobileAvatarContainer>
    </Link>
  );
};

export default MobileAvatar;
