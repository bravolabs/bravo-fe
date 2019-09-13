import React, { useState } from 'react';
import DefaultAvatar from './DefaultAvatar';

const Avatar = props => {
  const { avatar, userId } = props;
  const [imgFailed, setImgFailed] = useState(false);

  return imgFailed ? (
    <DefaultAvatar className="avatar default-avatar" {...props} />
  ) : (
    <img
      className="avatar user-avatar"
      src={`${avatar}?d=404`}
      alt={userId}
      onError={e => setImgFailed(true)}
    />
  );
};

export default Avatar;
