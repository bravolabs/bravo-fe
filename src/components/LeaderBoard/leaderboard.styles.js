import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';
import Breakpoints from '../../styling/variables/Breakpoints';

export const LeaderBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  margin: 22px 0 0 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  @media (max-width: ${Breakpoints.medium}px) {
    margin: 0;
  }
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 4.8rem;
  color: #36464f;
  margin-top: 0;
  margin-bottom: 4rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-width: 900px;
  width: 100%;
`;

