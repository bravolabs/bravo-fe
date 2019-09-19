import React from 'react';
import { Link } from 'react-router-dom';
import { ShoutoutUserAvatar, UserContainer, Username } from './user.styles';

const User = ({ id, avatar, name, size }) => {
  return (
    <UserContainer className="user" size={size}>
      <Link to={`/members/${id}`}>
        <ShoutoutUserAvatar avatar={avatar} name={name} seed={name} size={size} />
      </Link>
      <Username size={size}>{name}</Username>
    </UserContainer>
  );
};

export default User;
