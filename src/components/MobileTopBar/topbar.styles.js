import styled from 'styled-components';
import UIColors from '../../styling/variables/UIColors';
import Breakpoints from '../../styling/variables/Breakpoints';

export const TopBarContainer = styled.nav`
  display: none;

  @media (max-width: ${Breakpoints.medium}px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 4.8rem;
    background-color: ${UIColors.brand};
    z-index: 99;
  }
`;
