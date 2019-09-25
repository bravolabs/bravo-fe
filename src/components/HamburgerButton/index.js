import React from 'react';
import { ButtonContainer, Slice } from './hamburger.styles';

const HamburgerButton = ({ active, click }) => {
  return (
    <ButtonContainer className={active && 'open'} onClick={click}>
      <Slice />
      <Slice />
      <Slice />
    </ButtonContainer>
  );
};

export default HamburgerButton;
