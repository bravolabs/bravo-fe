import React from 'react';
import { ShoutoutUserAvatar, UserContainer, Username } from './user.styles';

const User = ({ id, avatar, name, size }) => {
  return (
    <UserContainer className="user" size={size}>
      <ShoutoutUserAvatar avatar={avatar} name={name} seed={name} size={size} />
      <Username size={size}>{name}</Username>
    </UserContainer>
  );
};

export default User;
