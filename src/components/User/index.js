import React from 'react';
import { ShoutoutUserAvatar, Username, UserContainer } from './user.styles';

const User = ({ avatar, name, size }) => {
  return (
    <UserContainer className="user" size={size ? size : null}>
      <ShoutoutUserAvatar avatar={avatar} name={name} seed={name} size={size ? size : null} />
      <Username fontWeight="500" size={size ? size : null}>
        {name}
      </Username>
    </UserContainer>
  );
};

export default User;
