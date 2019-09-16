import React from 'react';
import { ShoutoutUserAvatar, Username, UserContainer } from './user.styles';

const User = ({ avatar, name, size, userId }) => {
  return (
    <UserContainer size={size ? size : null}>
      <ShoutoutUserAvatar avatar={img} name={name} userId={userId} size={size ? size : null} />
      <Username fontWeight="500" size={size ? size : null}>
        {name}
      </Username>
    </UserContainer>
  );
};

export default User;
