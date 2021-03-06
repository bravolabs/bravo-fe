import styled from 'styled-components';
import { PageTitle } from '../../styling/atoms/Fonts';
import Breakpoints from '../../styling/variables/Breakpoints';

export const ShoutoutsContainer = styled.div`
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
    align-items: center;
    margin: 0;
  }
`;

export const Title = styled(PageTitle)`
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 4.8rem;
  color: #36464f;
  margin-bottom: 2rem;

  @media (max-width: ${Breakpoints.medium}px) {
    font-size: 4rem;
    font-weight: 300;
  }
`;

export const SubTitle = styled(PageTitle)`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #36464f;
  margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-width: 900px;
  width: 100%;
`;
