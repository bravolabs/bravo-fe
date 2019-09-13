import styled from 'styled-components';
import UIColors from '../../styling/variables/UIColors';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border: none;
  background: none;
  padding: 0;
  width: 2.4rem;
  height: 1.6rem;

  &.open {
    span {
      background-color: ${UIColors.brand};
    }
    span:nth-child(1) {
      transform: translateY(0.7rem) rotate(-135deg);
    }

    span:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-0.7rem) rotate(135deg);
    }
  }

`;

export const Slice = styled.span`
  transform: translateY(0rem) rotate(0deg) scale(1);
  opacity: 1;
  transition: all 200ms ease-in-out;
  height: 0.2rem;
  background-color: ${UIColors.light};
`;
