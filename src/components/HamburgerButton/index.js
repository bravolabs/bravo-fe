import React from 'react';
import { ButtonContainer, Slice } from './hamburger.styles';

const HamburgerButton = props => {
  return (
    <ButtonContainer>
      <Slice />
      <Slice />
      <Slice />
    </ButtonContainer>
  );
};

export default HamburgerButton;
