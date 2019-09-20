import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';
import Breakpoints from '../../styling/variables/Breakpoints';

export const LeaderBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 2.5rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  @media (max-width: ${Breakpoints.medium}px) {}
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 4.8rem;
  color: #36464f;
  margin-bottom: 4rem;
`;
