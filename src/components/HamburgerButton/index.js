import React from 'react';
import { ButtonContainer, Slice } from './hamburger.styles';

const HamburgerButton = props => {
  return (
    <ButtonContainer className='open'>
      <Slice />
      <Slice />
      <Slice />
    </ButtonContainer>
  );
};

export default HamburgerButton;
