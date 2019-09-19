import styled from 'styled-components';
import Breakpoints from '../../styling/variables/Breakpoints';

export const MainContentContainer = styled.div`
  margin-left: 90px;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  padding: 32px 12px 0 38px;

  @media (max-width: ${Breakpoints.medium}px) {
    max-width: 100vw;
    margin-left: 0;
    overflow-x: hidden;
    padding: 0;
    left: 0;
    right: 0;
  }
`;
