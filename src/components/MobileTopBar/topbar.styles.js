import styled from 'styled-components';
import UIColors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const TopBarContainer = styled.nav`
  display: none;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;~

  @media (max-width: ${Breakpoints.medium}px) {
    display: flex;
    width: 100vw;
    max-width: 100vw;
    height: 4.8rem;
    background-color: ${UIColors.brand};
  }
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 500;
  padding: 0 16px;
  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: fill 200ms ease-in-out;
  }

  &.active {
    > svg > g{
      fill: ${UIColors.brand};
    }
  }
`;
