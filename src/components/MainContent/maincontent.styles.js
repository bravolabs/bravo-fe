import styled from 'styled-components';
import Breakpoints from '../../styling/variables/Breakpoints';

export const MainContentContainer = styled.div`
  position: relative;
  top: 0px;
  left: 90px;
  right: 400px;
  display: flex;
  flex-direction: column;
  background: #f9fbfd;
  padding: 32px 12px 0 38px;

  @media (max-width: ${Breakpoints.medium}px) {
    max-width: 100vw;
    overflow-x: hidden;
    padding: 0;
    left: 0;
    right: 0;
  }
`;
