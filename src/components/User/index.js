import React from 'react';
import { ShoutoutUserAvatar, Username, UserContainer } from './user.styles';

const User = ({ img, alt, name, size }) => {
  return (
    <UserContainer size={size ? size : null}>
      <ShoutoutUserAvatar src={img} alt={alt} size={size ? size : null} />
      <Username fontWeight="500" size={size ? size : null}>
        {name}
      </Username>
    </UserContainer>
  );
};

export default User;
