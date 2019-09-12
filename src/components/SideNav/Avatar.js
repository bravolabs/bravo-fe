import React from 'react';
import { AvatarContainer } from './sidenav.styles';

const Avatar = ({ src, alt }) => {
  return (
    <AvatarContainer>
      <img src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
