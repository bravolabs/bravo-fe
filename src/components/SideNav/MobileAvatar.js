import React from 'react';
import { Link } from 'react-router-dom';
import { ExtraInfo, ComponentTitle } from '../../styling/atoms/Fonts';
import { MobileAvatarContainer } from './sidenav.styles';

const MobileAvatar = ({ src, alt, name, link }) => {
  return (
    <Link to={link}>
      <MobileAvatarContainer>
        <img src={src} alt={alt} />
        <ComponentTitle>{name}</ComponentTitle>
        <ExtraInfo>View Profile</ExtraInfo>
      </MobileAvatarContainer>
    </Link>
  );
};

export default MobileAvatar;
