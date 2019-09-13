import React, { useState } from 'react';
import { AvatarContainer } from './sidenav.styles';

const Avatar = ({ src, alt }) => {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <AvatarContainer>
      <img src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
