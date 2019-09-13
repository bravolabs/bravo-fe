import React from 'react';
import Link from '../UnstyledLink';
import { ExtraInfo, ComponentTitle } from '../../styling/atoms/Fonts';
import { MobileAvatarContainer } from './sidenav.styles';
import Avatar from '../../styling/atoms/SVGs/Avatars';

const MobileAvatar = ({ src, alt, name, link }) => {
  return (
    <Link to={link}>
      <MobileAvatarContainer>
        <Avatar svgWidth='96px' svgHeight='96px' color="#D182DB" />
        <img src={src} alt={alt} />
        <ComponentTitle>{name}</ComponentTitle>
        <ExtraInfo>View Profile</ExtraInfo>
      </MobileAvatarContainer>
    </Link>
  );
};

export default MobileAvatar;
