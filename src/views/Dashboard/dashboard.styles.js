import styled from 'styled-components';
import Breakpoints from '../../styling/variables/Breakpoints';

export const MainContent = styled.div`
  display: flex;
  margin-left: 90px;
  padding: 32px 32px 0 32px;
  height: 100vh;

  & > section {
    height: 100vh;
    width: 950px;
    overflow: auto;
    padding-right: 25px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: ${Breakpoints.medium}px) {
    max-width: 100vw;
    margin-left: 0;
    padding: 0;
    left: 0;
    right: 0;

    & > section {
      padding: 5px;
    }
  }
`;
