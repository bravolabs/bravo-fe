import React from 'react';
import { SuccessCard } from './success.styles';

const Success = () => {
  return (
    <SuccessCard>
      <span role="img" aria-label="party">
        🥳
      </span>
      Successfully added app to Slack!
      <span role="img" aria-label="party">
        🎊
      </span>
    </SuccessCard>
  );
};

export default Success;
