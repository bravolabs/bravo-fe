import React, { useState } from 'react';
import DefaultAvatar from './DefaultAvatar';

const Avatar = props => {
  const { avatar, seed, name } = props;
  const [imgFailed, setImgFailed] = useState(false);

  return imgFailed ? (
    <DefaultAvatar className="avatar default-avatar" ColorSeed={seed} />
  ) : (
    <img
      className="avatar user-avatar"
      src={`${avatar}?d=404`}
      alt={name}
      onError={e => setImgFailed(true)}
    />
  );
};

export default Avatar;
