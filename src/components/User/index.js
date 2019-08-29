import React from 'react';
import { ShoutoutUserAvatar, Username } from './user.styles';

const User = ({ img, alt, name }) => {
  return (
    <>
      <ShoutoutUserAvatar src={img} alt={alt} />
      <Username fontWeight='1000'>{name}</Username>
    </>
  );
};

export default User;
